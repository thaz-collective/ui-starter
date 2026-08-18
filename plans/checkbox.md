# Checkbox

## What it is
A single checkbox control (with indeterminate state), plus a `CheckboxGroup` wrapper providing label/description/error for a set of checkboxes.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/checkbox.tsx` (also pulls `Label`/`FieldError`/`labelVariants` from jolly's shared `field.tsx` — see `plans/field.md`, which now documents that there's no shared folder to map that onto, only an inlining pattern to follow).

## RAC primitives used
`Checkbox`, `CheckboxGroup` from `react-aria-components`.

## Public API
Compound object `Checkbox`:
- `Root` (the `Checkbox` control itself, also default export)
- `Group` (`CheckboxGroup` root)
- `Label` (group-level label — own inlined copy, following `text-field/components/text-field-label.tsx`)
- `Description` (own inlined copy, following `text-field/components/text-field-description.tsx`)
- `FieldError` (own inlined copy, following `text-field/components/text-field-field-error.tsx`)

## Build steps
1. Create `src/common/components/checkbox/` with `context.ts`, `variants.ts`, `index.ts`, `components/checkbox.tsx` (Root, the box+check icon), `components/checkbox-group.tsx`, `components/checkbox-group-context-provider.tsx`, `components/checkbox-label.tsx`, `components/checkbox-description.tsx`, `components/checkbox-field-error.tsx`.
2. `variants.ts`: `tv()` slots — `group` (flex column gap-2), `root` (the label row, `group/checkbox`), `box` (the visual square: border, `group-data-selected/checkbox:bg-primary`, `group-data-indeterminate/checkbox:bg-primary`, `group-data-invalid/checkbox:border-danger`, focus-visible ring), `label`, `description`, `fieldError` — follow the `group-data-[state]/scope:` slot pattern used by `text-field`'s `variants.ts` for invalid/disabled propagation from `Group` down to its parts.
3. `context.ts`: `CheckboxGroupContext` holding `{ slots }`, same shape as `text-field`'s context, so `Checkbox.Label/Description/FieldError` can read group-level invalid/disabled state.
4. `components/checkbox.tsx` (Root): wrap RAC `Checkbox` directly (self-contained, no context dependency — a lone checkbox works outside a group), render the box div with check/minus icon (use `lucide-react` `Check`/`Minus` to match icon lib already used in `number-field`, not `@radix-ui/react-icons`).
5. `components/checkbox-group.tsx`: wrap RAC `CheckboxGroup`, wrapped in `CheckboxGroupContextProvider`, `data-slot="checkbox-group"`.
6. `components/checkbox-group-context-provider.tsx`, `-label.tsx`, `-description.tsx`, `-field-error.tsx`: full inline RAC wraps (own `Label`/`Text`/`FieldError` + base `tv()` + `data-slot`) with group slot classNames applied — mirror `text-field`'s `Label`/`Description`/`FieldError` subcomponents exactly (same file shape, copied and adapted, not imported).
7. `index.ts`: `Object.assign(CheckboxRoot, { Root, Group, Label, Description, FieldError })`; export types + `checkboxVariants`.

## Dependencies
- No shared atoms to reuse — follow the same inlined label/description/field-error pattern as `text-field` (own copies per part, not imports).
- Mirror `text-field`'s context/slot-propagation approach directly; build after re-reading `text-field` (already done) — no other 26-list dependency.
- `radio-group` (see `plans/radio-group.md`) has the identical group/label/description/field-error shape — consider building `checkbox` and `radio-group` back-to-back since the group wrapper code is nearly identical.
