# TanStack React Form v2 (alpha) Integration Plan

Status: research/planning only. No `src/` implementation code was written for this doc.

**Verified against `pnpm intent` + installed `.d.ts` on 2026-08-18.** One factual error was found and corrected: there is **no `form.AppField` component** in this alpha. Registered field components (via `createFormHook`) are consumed through the *same* `form.Field` render prop as unregistered usage — the render-prop argument (`field`) simply gains the registered components as properties (e.g. `field.TextField`), and no separate `AppField`/`.AppField` wrapper for individual fields exists anywhere in the shipped types. `form.AppForm` does exist, but it is a context *provider* needed only for registered **form-level** components (`formComponents`) and `useFormContext()` — not required to use registered field components. Everything else checked (`createFormHook`, `getFormHookHelpers`, `fieldComponent.strict/.loose`, `fieldBrand.strict/.loose`, `field.value`/`.handleChange`/`.handleBlur`/`.errors`/`.meta.isInvalid`) matched the doc's claims exactly against the `.d.ts` sources. See corrections inline below and the updated "Open Questions" section.

Package versions installed: `@tanstack/react-form@2.0.0-alpha.1` (deps on `@tanstack/form-core@2.0.0-alpha.1`, `@tanstack/react-store@^0.11.0`), `@tanstack/react-form-devtools@1.0.0-alpha.1`.

Research method: `pnpm intent` (`vpx @tanstack/intent@latest`) exposes a CLI that discovers "skill" packs bundled inside installed TanStack packages. `@tanstack/react-form` ships real skill docs + code examples at `node_modules/@tanstack/react-form/skills/*/SKILL.md`, sourced from the actual `TanStack/form-v2` monorepo (composition, error-visibility, reusable policies, schema modes, query-backed forms, examples-authoring, type-error-debugging). These were read directly, alongside the package's own `.d.ts` files in `node_modules/@tanstack/react-form/dist/**`, which is the primary ground truth used below. No web fetch was needed/attempted since the alpha's own bundled docs were sufficient and authoritative.

## API Overview

### Core shape: still `useForm` + `form.Field` render-prop, but restructured internally

v2 keeps the v1-familiar shape at the call-site — `useForm({ defaultValues, onSubmit })` returns a form object with `form.Field`, `form.Subscribe`, `<form>` submit wiring — but adds new pieces: `form.ArrayField`, `form.FormGroup`, `formOptions`/`formOptions.strictSchema`/`formOptions.looseSchema`, `ReactFormType<...>` for typed prop-drilling, `defineFieldGroup` for cross-form reusable sections, `errorVisibility`/`createErrorVisibility`, `createValidator`, and — most relevant to this library — `createFormHook` + `getFormHookHelpers` for registering reusable field components ("App Form" pattern, evolved from v1's `createFormHookContexts`).

Minimal example (from `node_modules/@tanstack/react-form/skills/react-form-composition-setup/SKILL.md`):

```tsx
import { useForm } from '@tanstack/react-form'

const form = useForm({
  defaultValues: { firstName: '', lastName: '', tags: [''] },
  onSubmit: ({ value }) => console.log(value),
})

<form.Field name="firstName">
  {(field) => (
    <input
      name={field.name}
      value={field.value}
      onBlur={field.handleBlur}
      onChange={(event) => field.handleChange(event.target.value)}
    />
  )}
</form.Field>
```

Key type facts pulled from `node_modules/@tanstack/react-form/dist/ReactForm/Components.public.d.ts`:

- `form.Field` is typed as `ReactFormFieldComponent<TFormData, TFormErrorTypes, TFieldComponents>` — a generic function component whose `name` prop is constrained to `DeepKeys<TFormData>` (dot/bracket paths, deeply inferred — no `as const` needed, confirmed by the "Common Mistakes" section warning against `field: any` / `as const` assertions).
- The field-render-prop argument is `ReactFieldApi<TFieldName, TFieldValue, TFieldError, TFormData, TFormErrorTypes, TFieldComponents>` = `FieldApi<...> & FieldComponentsMatchingType<TFieldComponents, TFieldValue>` — i.e. the field API object is intersected with any custom field components registered via `createFormHook`, and TypeScript filters which registered components are even offered based on whether their branded value type is compatible with this field's value type (see "Field component branding" below).
- `form.ArrayField` (`ReactFormArrayFieldComponent`) is a **new, distinct** component from `form.Field` for list rendering — `form.Field` on an array name still works but treats the array as one atomic value (good for e.g. a tags string[] input), whereas `form.ArrayField` subscribes to array length/version and is required when rendering one child `form.Field` per array item. This is an explicit "Common Mistake" callout in the skill doc, not a documentation nicety — getting this wrong causes stale/broken list re-renders.
- `form.FormGroup` / `FormGroupApi` — a way to scope a sub-tree of the form (own `state.submissionAttempts`, own validators) without it being a fully separate form. Not deeply needed for this integration but affects `errorVisibility` scoping (state reads are scoped to nearest group).
- `formOptions(...)`, `formOptions.strictSchema(...)`, `formOptions.looseSchema(...)` — three modes for how a Standard Schema validator (Zod, etc.) interacts with typed `defaultValues`. Default mode: literal `defaultValues` own the type, callback validators infer from them. `strictSchema`: schema input/output own the boundary (good for pipelines/transforms); parsed result surfaces via `onSubmit({ schemaOutputs })`, not `value`. `looseSchema`: schema is a pure ruleset, but `defaultValues` may be `null`/nullable for editable-empty-state UX (e.g. an unset date field) while still validating against a non-nullable schema at submit time. This is directly relevant to our `date-time-picker`/`time-field`/`number-field` components, whose "empty" state is naturally `null`.
- `errorVisibility` is a **callback**, not a v1-style string preset (`'touched'` etc. does not exist in v2). Built via `createErrorVisibility(({ fieldState, state }) => boolean)`, e.g. `fieldState.meta.isBlurred || state.submissionAttempts > 0`. This callback is what should gate whether our `FieldError` slot renders, described further below.
- `createValidator({ triggers, triggerDebounceMs, ... })` packages *when* validation runs (separately from *when errors are shown*, which is `errorVisibility`'s job).

### The field-component registration mechanism (`createFormHook` + `getFormHookHelpers`) — this is our integration seam

From `node_modules/@tanstack/react-form/dist/AppForm/getFormHookHelpers.public.d.ts` and `createFormHook.public.d.ts`:

```tsx
import { createFormHook, getFormHookHelpers } from '@tanstack/react-form'
import type { FieldWithValue } from '@tanstack/react-form'

function TextInput({ field, label }: { field: FieldWithValue<string>; label: string }) {
  return (
    <label>
      {label}
      <input value={field.value} onChange={(e) => field.handleChange(e.target.value)} />
    </label>
  )
}

const { fieldComponent } = getFormHookHelpers()
const TextField = fieldComponent.strict(TextInput, 'field')

export const { useAppForm } = createFormHook({
  fieldComponents: { TextField },
  formComponents: {},
})
```

`fieldComponent.strict(Component, fieldPropKey)` wraps a component so that App Form auto-injects the current field API into the named prop (`'field'` above), and **removes that prop from the component's public signature** when rendered inside `useAppForm()`'s `form.AppField` (implied by `AppFormComponent`/`ReactAppFormApi` types — the exact runtime component name for consuming registered field components wasn't in the `.d.ts` excerpts read, worth re-verifying, see Open Questions). `.strict` requires the field's value type to exactly match `FieldWithValue<TValue>`; `.loose` (also on `fieldComponent`) accepts any assignable/wider value type — e.g. useful for a generic `FieldError` display component that should be offered for every field regardless of value type. There's also `fieldBrand.strict<TValue>()`/`fieldBrand.loose<TValue>()` for components that DON'T need the field API injected (e.g. a static "Required" adornment) but should still only be type-offered for compatible fields.

This confirms v2's supported pattern for "reusable field-level UI components used across many form fields" is exactly this registration step — not a hand-rolled generic hook. This is the seam our RAC-based compound components should plug into.

## Integration Pattern

### Design goal

Every existing component (`TextField`, `DateTimePicker`, `TimeField`, `NumberField`, ...) is a compound object built on a react-aria-components (RAC) controlled primitive: `TextField.Root` wraps RAC's `<TextField>`, accepting standard RAC controlled props (`value`, `onChange`, `onBlur`, `isInvalid`, `isRequired`, `errorMessage`, `name`, ...) plus our tailwind-variants styling props, then a `children` compound tree (`Label`, `Input`/`TextArea`, `Description`, `FieldError`). Confirmed from `src/common/components/text-field/components/text-field.tsx`, `text-field-input.tsx`, `text-field-field-error.tsx` and the equivalent `date-time-picker.tsx` / `number-field.tsx`: these are thin, prop-passthrough wrappers with no internal state of their own — all state currently lives in whatever renders them.

Crucially, `src/common/components/text-field/components/text-field-field-error.tsx` renders RAC's own `FieldError`, and RAC's `FieldError` (`node_modules/react-aria-components/dist/private/FieldError.mjs`) reads `isInvalid`/`validationErrors` from a **React context** (`FieldErrorContext`) that RAC's field primitives (`TextField`, `DateField`, `NumberField`, ...) populate from their own `isInvalid`/`errorMessage` props. This means: **our components already have a working "error surfacing" seam that requires zero new plumbing** — we just need to pass `isInvalid` and `errorMessage` down to `Root` correctly, and `FieldError` renders itself.

Given that, the recommended pattern is a **thin per-component adapter that maps react-form's field API onto the existing Root props**, rather than reinventing state inside each compound component. Two viable shapes, not mutually exclusive:

1. **Manual wiring at the call site** (works today, zero new code): a consumer uses `form.Field` directly and spreads the field API onto our existing `Root` props.
2. **A registered `fieldComponent` per our field** (the sanctioned v2 pattern via `createFormHook`), so consumers get `form.AppField` ergonomics with no per-usage boilerplate.

Both should be documented; (2) is the "official" ergonomic path and should be what we standardize on for consuming apps, but (1) must keep working since these components must also work with zero form library involved.

### Example: `text-field`

Manual wiring (no `createFormHook`, works with plain `useForm`):

```tsx
<form.Field name="email">
  {(field) => (
    <TextField.Root
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.errors.length > 0}
      errorMessage={field.errors.map((e) => e.message).join(', ')}
    >
      <TextField.Label>Email</TextField.Label>
      <TextField.Input />
      <TextField.FieldError />
    </TextField.Root>
  )}
</form.Field>
```

Note `field.handleChange` matches RAC's `onChange(value: string)` shape directly for a plain text value — no adapter function needed for `text-field`. `field.errors` is an array of error objects (each apparently exposing `.message`, per the error-visibility skill doc example `field.errors.map((error) => error.message).join('\n')` at `node_modules/@tanstack/react-form/skills/error-visibility-workflows/SKILL.md`).

Registered-component wiring (proposed, using `createFormHook`), sketched as `src/common/lib/form-fields.tsx` (not implemented, illustrative only):

```tsx
import { createFormHook, getFormHookHelpers } from '@tanstack/react-form'
import type { FieldWithValue } from '@tanstack/react-form'
import { TextField as TextFieldComponent } from '#src/common/components/text-field'

function TextFieldAdapter({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<string>
  label?: React.ReactNode
  description?: React.ReactNode
} & Omit<TextFieldComponent.RootProps, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <TextFieldComponent.Root
      {...rootProps}
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
      errorMessage={field.errors.map((e) => e.message).join(', ')}
    >
      {label ? <TextFieldComponent.Label>{label}</TextFieldComponent.Label> : null}
      <TextFieldComponent.Input />
      {description ? <TextFieldComponent.Description>{description}</TextFieldComponent.Description> : null}
      <TextFieldComponent.FieldError />
    </TextFieldComponent.Root>
  )
}

const { fieldComponent } = getFormHookHelpers()

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField: fieldComponent.strict(TextFieldAdapter, 'field'),
    // DateTimePicker, TimeField, NumberField, ... follow the same shape
  },
  formComponents: {},
})
```

Consumer usage becomes (**corrected**: there is no `form.AppField` component. Registered field components ride along on the ordinary `form.Field` render prop — the `field` argument gains a property per registered component, confirmed by the worked examples embedded in `node_modules/@tanstack/react-form/dist/AppForm/createFormHookTypes.public.d.ts`'s `AppFormHookResult.appFormOptions`/`useAppForm` JSDoc):

```tsx
const form = useAppForm({ defaultValues: { email: '' } })

<form.Field name="email">
  {(field) => <field.TextField label="Email" />}
</form.Field>
```

`form.AppForm` does exist as a separate provider component, but it's only needed to expose registered **form-level** `formComponents` and to make `useFormContext()` resolve inside them — e.g.:

```tsx
<form.AppForm>
  <form.Field name="name">
    {(field) => <field.TextField label="Name" />}
  </form.Field>
  <SubmitButton /> {/* a registered formComponent using useFormContext() */}
</form.AppForm>
```

Since this integration only registers `fieldComponents` (no `formComponents` planned), consumers likely don't need `form.AppForm` at all for the field-adapter pattern above.

This keeps `TextField.Root/Label/Input/Description/FieldError` exactly as-is (standalone usage untouched, no breaking changes to the existing library), and adds one small adapter file per field type living outside `src/common/components/*` (e.g. under a new `src/common/lib/form/` or similar — naming TBD, out of scope for this doc) that consuming apps opt into.

### Why not bake form-awareness into the components themselves

The Root components are already generic RAC pass-throughs; adding a `field` prop directly to e.g. `TextField.Root` would either (a) create an optional dependency on `@tanstack/react-form` types inside a component meant to be copy-pasted standalone (this is a "copy-paste component library" per the repo framing — pulling in a peer dep contradicts that), or (b) require duck-typing the field API loosely, which is fragile against an alpha API still in flux. Keeping the adapter as a separate, optional file that a consumer copies alongside the component (same "copy-paste" philosophy) avoids coupling the core component to any specific form library while still making the wiring trivial.

## Per-Component Notes

- **text-field** (`src/common/components/text-field/`): Simplest case. `field.handleChange` matches RAC `onChange(value: string)` 1:1. No value transform needed.
- **text-area** (compound slot `TextField.TextArea`, same Root): same adapter as text-field; just swap which input slot is rendered as children.
- **number-field** (`src/common/components/number-field/`): RAC's `NumberField` `onChange` emits a `number` (possibly `NaN` while the input is mid-edit/empty depending on RAC version behavior — worth re-verifying against the installed `react-aria-components` version). react-form's `field.value`/`handleChange` are otherwise value-type-agnostic (`FieldWithValue<number>`), so this mostly just needs the adapter typed against `number` rather than `string`. If "empty" needs to be representable (e.g. optional numeric field), consider `formOptions.looseSchema` with a nullable default (`null`) rather than forcing `NaN`/`0` into the type.
- **date-time-picker** (`src/common/components/date-time-picker/`): RAC's `DatePicker` is generic over `T extends DateValue` (from `@internationalized/date` — `CalendarDate`/`CalendarDateTime`/`ZonedDateTime`) per `date-time-picker.tsx`'s `DateTimePickerProps<T extends DateValue>`. This is the one component where a real value-shape adapter is needed if the form's canonical stored value is a plain string/ISO date/JS `Date` rather than a `CalendarDate`-family value — the adapter's `onChange` must convert `DateValue -> form value` and its `value` prop must convert `form value -> DateValue` (or `null` when unset). Recommend deciding a canonical "form value" representation for dates project-wide (e.g. keep the `DateValue` type as the canonical value type end-to-end, avoiding conversion entirely, if consuming apps don't need a plain string) before designing this adapter further — this is a real design decision, not just an integration detail. Note there is no separate `DateField` component — date-only, date+time, and time-of-day-within-a-date use cases are all covered by `date-time-picker`'s `granularity` prop.
- **time-field** (`src/common/components/time-field/`): Same `DateValue`-family concern as date-time-picker but for standalone `Time` values (not tied to a date) — likely needs the same conversion strategy decided alongside date-time-picker so the two stay consistent.
- **Planned (not yet implemented in this repo as of this research pass), noted for forward-compat only:**
  - **checkbox / switch**: boolean fields — RAC's `onChange(isSelected: boolean)` should map directly to `FieldWithValue<boolean>`, likely the simplest adapter of the set (no value transform).
  - **select / combobox**: RAC's `Select`/`ComboBox` `onSelectionChange` emits a `Key` (string | number) rather than the full option object; the adapter needs to decide whether the form's canonical value is the key or the full option, and if async-loaded options, the adapter must not assume options are available synchronously when initializing `defaultValues` (e.g. a selected key with no matching loaded option yet). This will need its own design pass once that component exists — flagging now since the task mentioned it may land in parallel.
  - **radio group**: similar to select — `RadioGroup`'s `onChange` emits a plain string value, likely a low-friction adapter similar to text-field.

## Open Questions / Risks

Everything below is genuinely uncertain because the package is `2.0.0-alpha.1` and no stable docs/changelog were reachable in `node_modules` beyond the bundled skill files (no web research was performed for this doc; recommend a follow-up pass against tanstack.com/form/v2 docs once they exist).

- **Solid / directly confirmed against `.d.ts` on 2026-08-18 (low risk of changing before stabilization):**
  - `useForm`, `form.Field` render-prop shape, `field.value`/`field.handleChange`/`field.handleBlur`/`field.errors` basic surface — confirmed in `@tanstack/form-core`'s `FieldApi/FieldApi.public.d.ts`.
  - `field.meta.isInvalid` and `field.meta.isBlurred` are real, current property names — confirmed in `FieldApi/FieldApi.public.d.ts`'s `BaseFieldMeta`/`FieldMeta<TFieldError>` interfaces (`isBlurred: boolean`, `isInvalid: boolean`).
  - `field.errors` type is `FieldErrors<TFieldError> = Array<unknown extends TFieldError ? ValidationIssue : TFieldError>` (`form-core`'s `validation.public.d.ts`) — for the common unconfigured case this resolves to an array of `ValidationIssue`; still worth confirming `ValidationIssue`'s exact shape (it's reasonable to assume a `.message` string given the skill-doc examples, but the full shape wasn't unpacked here) before hard-coding `.message` access in adapters.
  - `createFormHook` + `getFormHookHelpers` (`fieldComponent.strict/.loose`, `fieldBrand.strict/.loose`) exist exactly as described, confirmed by reading the full bodies of `AppForm/getFormHookHelpers.public.d.ts` and `AppForm/createFormHook.public.d.ts` (not just skill-doc examples).
  - **Corrected**: `form.AppField` does **not exist**. Registered field components are consumed via the plain `form.Field` render prop — the `field` argument gains one property per registered `fieldComponents` entry (e.g. `field.TextField`). Confirmed by reading the full body of `AppForm/createFormHookTypes.public.d.ts` (`AppFormHookResult`'s JSDoc examples use `form.Field` + `field.TextField`, never `form.AppField`) and by grepping the entire `@tanstack/react-form/dist` tree for `AppField` — the only real symbol is `form.AppForm` (`AppForm/ReactAppFormApi.public.d.ts`, `AppFormComponent = FunctionComponent<{ children }>`), a context provider needed only for registered `formComponents` / `useFormContext()`, not for field components.
  - `errorVisibility` being callback-based (`createErrorVisibility`), not string presets — confirmed by its usage/exports in `form-core`'s `validation.public.d.ts`.
  - `formOptions` / `.strictSchema` / `.looseSchema` three-mode split for schema-typed forms — not re-verified in this pass beyond the original skill-doc read; still considered solid but wasn't re-confirmed against `.d.ts` bodies directly.

- **Speculative / not directly confirmed, needs re-verification before implementing:**
  - `form.ArrayField` as a distinct required component for list rendering — not re-checked against `.d.ts` in this verification pass (only the original skill-doc read backs this claim).
  - Exact shape of `field.errors[number]` (i.e. `ValidationIssue`'s fields) — still assumed `{ message: string }` based on skill-doc examples; the `ValidationIssue` type body itself wasn't read in either pass.
  - RAC's exact `errorMessage` prop typing on `TextField`/`DateField`/`NumberField` (string vs. `(validation) => string` function) — not checked in this pass; still needs confirming against `react-aria-components` types before implementing.
  - Async/loading-state handling for not-yet-existing select/combobox components — entirely speculative, flagged only as a design concern to revisit.
  - Whether `2.0.0-alpha.1` here tracks the `TanStack/form-v2` branch referenced in the bundled skill `sources:` frontmatter 1:1, or whether the alpha may still diverge from those source file paths before release.
  - No investigation was done into `@tanstack/react-form-devtools` (also in package.json) — out of scope for this doc.

Recommendation: re-read `@tanstack/form-core`'s `ValidationIssue` type and `react-aria-components`' `errorMessage` prop typing before writing the first real adapter implementation, and re-run `pnpm intent list` at that time in case the bundled skill docs/types have moved in a newer alpha (this verification pass used `2.0.0-alpha.1`, same version the original doc was written against, so no version drift occurred here).
