# SearchField

## What it is

A text field specialized for search: leading icon, clear button, native search semantics.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/searchfield.tsx`

## RAC primitives used

`SearchField`, `Group`, `Input`, `Button` from `react-aria-components`.

## Public API

Compound object `SearchField`, mirroring `TextField`'s shape:

- `Root` (`SearchField`, also default export)
- `Group` (wraps icon + input + clear button, analogous to `TextField.LabelInputContainer` but is RAC `Group`, not a label/input pairing)
- `Input`
- `ClearButton`
- `Label`, `Description`, `FieldError`

## Build steps

1. Create `src/common/components/search-field/` with `context.ts`, `variants.ts`, `index.ts`, `components/search-field.tsx` (Root), `components/search-field-group.tsx`, `components/search-field-input.tsx`, `components/search-field-clear-button.tsx`, `components/search-field-label.tsx`, `components/search-field-description.tsx`, `components/search-field-field-error.tsx`, `components/search-field-context-provider.tsx`.
2. `variants.ts`: `tv()` slots keyed the same way as `text-field/variants.ts` (`group/search-field` root, `group-data-[invalid=true]/search-field:` on `group`/`label`/`description`/`fieldError`, `group-data-[disabled=true]/search-field:` for disabled). Add slots: `root`, `group` (the bordered box holding icon+input+clear), `icon`, `input`, `clearButton`, `label`, `description`, `fieldError`.
3. `context.ts`: same `{ slots }` shape as `text-field`'s context.
4. `components/search-field.tsx` (Root): wrap RAC `SearchField` directly, wrapped in context provider (mirrors `TextField`'s two-layer Root/Inner split).
5. `components/search-field-group.tsx`: wrap RAC `Group`, render a leading search icon (`lucide-react` `Search`) inline before `children` (icon is presentational, not a separate exported part, matching jolly).
6. `components/search-field-input.tsx`: wrap RAC `Input` directly with its own base `tv()`, exactly like `text-field-input.tsx` does today (it wraps RAC `Input` directly, not a shared `input` atom — there is no shared `input` folder anymore).
7. `components/search-field-clear-button.tsx`: wrap RAC `Button slot="clear"` with an `X` icon, hidden when `group-data-[empty]` (RAC exposes this via the `SearchField` render props/CSS state).
8. `-label.tsx`/`-description.tsx`/`-field-error.tsx`: identical delegation pattern to `text-field`'s.
9. `index.ts`: `Object.assign(SearchFieldRoot, { Root, Group, Input, ClearButton, Label, Description, FieldError })`.

## Dependencies

- Directly mirror `text-field`'s folder shape/context pattern (already migrated) — read it again while building this one, including its inlined `text-field-input.tsx` (no shared `input` atom exists to reuse).
- No dependency on other not-yet-migrated components.
