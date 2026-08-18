# GridList

## What it is
A selectable, drag-reorderable list of rich rows (richer than `ListBox` — each row is grid-navigable, supports drag handles and inline selection checkboxes).

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/grid-list.tsx`

## RAC primitives used
`GridList`, `GridListItem`, `Button` (drag handle) from `react-aria-components`; also imports our `Checkbox` for the inline selection control.

## Public API
Compound object `GridList`:
- `Root` (`GridList`, also default export)
- `Item`

## Build steps
1. Create `src/common/components/grid-list/` with `variants.ts`, `index.ts`, `components/grid-list.tsx` (Root), `components/grid-list-item.tsx`.
2. `variants.ts`: `tv()` slots — `root` (bordered box, `data-empty:` centered empty state), `item` (`data-disabled`, `data-focus-visible`, `data-hovered`, `data-selected`, `data-dragging`), `dragHandle`.
3. `components/grid-list.tsx` (Root): wrap RAC `GridList` directly, generic `<T extends object>`.
4. `components/grid-list-item.tsx`: wrap RAC `GridListItem`, default `textValue` fallback, conditionally render a drag-handle `Button slot="drag"` when `allowsDragging`, and the migrated `Checkbox.Root` (`slot="selection"`) when `selectionMode === "multiple" && selectionBehavior === "toggle"`.
5. `index.ts`: `Object.assign(GridListRoot, { Root, Item })`.

## Dependencies
- **Depends on `checkbox`** (see `plans/checkbox.md`) for the inline row-selection control — build `checkbox` first.
