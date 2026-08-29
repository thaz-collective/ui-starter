# TagGroup

## What it is

A group of removable "chip"/tag items (e.g. selected-filter chips), with group label/description/error.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/tag-group.tsx`

## RAC primitives used

`TagGroup`, `TagList`, `Tag`, `Button` (remove) from `react-aria-components`.

## Public API

Compound object `TagGroup`:

- `Root` (`TagGroup`, also default export)
- `List` (`TagList`)
- `Tag`
- `Label`, `GroupDescription`, `FieldError` (own inlined copies, following `text-field`'s pattern — no shared atoms exist)

## Build steps

1. Create `src/common/components/tag-group/` with `context.ts`, `variants.ts`, `index.ts`, and `components/tag-group.tsx` (Root), `-list.tsx`, `-tag.tsx`, `-label.tsx`, `-description.tsx`, `-field-error.tsx`, `-context-provider.tsx`.
2. `variants.ts`: `tv()` slots — `root`, `list` (`flex flex-wrap gap-2`, `data-empty` state text), `tag` (chip: `data-selected`/`data-focused`/`data-disabled`, `variant` sub-variant for selected vs unselected chip color — port jolly's `badgeVariants` inline as slot variants instead of a separate cva import, since we don't have a shared `badge` concept in this library), `removeButton`, `label`, `description`, `fieldError`.
3. `context.ts`: `{ slots }`, same shape as `text-field`/`checkbox`.
4. `components/tag-group.tsx` (Root): wrap RAC `TagGroup`, wrapped in context provider.
5. `components/tag-group-list.tsx`: wrap RAC `TagList`, generic `<T extends object>`.
6. `components/tag-group-tag.tsx`: wrap RAC `Tag`, default `textValue` fallback, choose slot variant based on `renderProps.selectionMode === 'none' || renderProps.isSelected` (default) vs otherwise (secondary), render remove `Button slot="remove"` with an `X` icon when `allowsRemoving`.
7. `-label.tsx`/`-description.tsx`/`-field-error.tsx`: identical inlined-file pattern to `text-field`'s own `text-field-label.tsx`/`text-field-description.tsx`/`text-field-field-error.tsx` (note: jolly renders its own `errorMessage` `Text` manually here rather than using RAC `FieldError` — prefer the inlined `FieldError` wrap for consistency with the rest of this library instead of copying jolly's manual `Text slot="errorMessage"`).
8. `index.ts`: `Object.assign(TagGroupRoot, { Root, List, Tag, Label, Description, FieldError })`.

## Dependencies

- No shared atoms to reuse — follow the same inlined label/description/field-error pattern as `text-field`/`checkbox`/`radio-group`.
- No chip/badge concept exists yet in this library (not in the 26-item batch) — the chip color variants are defined locally inside `tag-group/variants.ts` rather than pulled from elsewhere.
- Shares its group/label/description/error shape with `checkbox` and `radio-group` — build after those two so the context/slot-propagation pattern is well-worn.
