# Field

## What it is
**Not a standalone UI component** — in jolly-ui this is a shared internal primitives file (`Label`, `FieldGroup`, `FieldError`, `FormDescription`) that most of their form-field components (`checkbox`, `radio-group`, `searchfield`, `select`, `combobox`, `tag-group`, `meter`, `progress`, `slider`) import from.

**Update (post-restructure): there is no shared folder to map this onto anymore.** This library used to have standalone `label`/`group`/`field-error`/`description` folders that composite components imported from, but those were removed. The current rule is: every composite component **inlines its own copy** of each pattern directly into its own `components/<component>-label.tsx`, `<component>-description.tsx`, `<component>-field-error.tsx` (and, where relevant, `<component>-label-input-container.tsx` / `<component>-group.tsx`) files — a full RAC wrap (`Label`/`Text`/`FieldError`/`Group`) + `data-slot` + a base `tv()` for that pattern's own visual rules, plus that component's own context-driven slot styling layered on top. `src/common/components/text-field/components/text-field-label.tsx`, `text-field-description.tsx`, and `text-field-field-error.tsx` are the reference implementation — read those three files before building any new form-field-shaped component's own copies.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/field.tsx`

## RAC primitives used
`Label`, `Group`, `Text`, `FieldError` from `react-aria-components` — each now wrapped **independently inside every composite folder that needs it** (no shared wrapper folder).

## Public API
**No new folder/component needed, and no shared-atom mapping table either** (the previous version of this doc pointed at `label`/`description`/`field-error`/`group` folders that have since been deleted). This plan now just documents the pattern every consumer should follow:

| jolly-ui (`field.tsx`) | our equivalent |
|---|---|
| `Label` / `labelVariants` | inlined per-component `<component>-label.tsx`, following `text-field/components/text-field-label.tsx` |
| `FormDescription` | inlined per-component `<component>-description.tsx`, following `text-field/components/text-field-description.tsx` |
| `FieldError` | inlined per-component `<component>-field-error.tsx`, following `text-field/components/text-field-field-error.tsx` |
| `FieldGroup` / `fieldGroupVariants` | inlined per-component `<component>-label-input-container.tsx` or `<component>-group.tsx` (bordered/ghost look), following `text-field/components/text-field-label-input-container.tsx` |

## Build steps
1. **Do not create a `field/` folder** — same conclusion as before, but for a different reason: it's not that a shared atom already exists, it's that this library's convention is now "duplicate, don't share."
2. When building any of `checkbox`, `radio-group`, `searchfield`, `select`, `combobox`, `tag-group`, `meter`, `progress`, `slider`, re-read `text-field`'s four files (`text-field-label.tsx`, `text-field-description.tsx`, `text-field-field-error.tsx`, `text-field-label-input-container.tsx`) as the pattern to copy — do **not** look for a shared folder to import from, there isn't one.
3. Each component's own `variants.ts` slots (`label`, `description`, `fieldError`, `inputLabelContainer`/`group`, etc., following `text-field/variants.ts`'s `textFieldVariants` shape) supply the component-specific state-driven styling (invalid/disabled/required propagation via `group-data-[...]/`); the per-file base `tv()` in each inlined component (e.g. `labelVariants` inside `text-field-label.tsx`) supplies the structural/typographic base that's identical across components.
4. No index.ts/variants.ts/context.ts to write for this entry itself — it remains documentation-only.

## Dependencies
This is a documentation-only entry with no code output. Every form-field-shaped component in this batch depends on getting this inlining pattern right — verify each new component's `label`/`description`/`field-error`/`label-input-container` (or `group`) files match `text-field`'s shape (already read during this planning pass) before starting `checkbox` or `radio-group`, since those are the first consumers.
