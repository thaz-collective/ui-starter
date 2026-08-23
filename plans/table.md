# Table

## What it is

A full data table: header/columns (sortable, resizable), body, rows, cells.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/table.tsx`

## RAC primitives used

`Table`, `TableHeader`, `Column`, `ColumnResizer`, `TableBody`, `Row`, `Cell`, `ResizableTableContainer`, `Group` from `react-aria-components`.

## Public API

Compound object `Table`:

- `Root` (`Table`, also default export)
- `Header` (`TableHeader`)
- `Column`
- `Body` (`TableBody`)
- `Row`
- `Cell`
- `ResizableContainer` (`ResizableTableContainer`)

## Build steps

1. Create `src/common/components/table/` with `variants.ts`, `index.ts`, and `components/table.tsx` (Root), `-header.tsx`, `-column.tsx`, `-body.tsx`, `-row.tsx`, `-cell.tsx`, `-resizable-container.tsx`.
2. `variants.ts`: `tv()` slots — `root`, `header`, `column`, `columnGroup` (the inner flex wrapper RAC needs for sort-hover styling), `columnResizer`, `body`, `row` (`data-hovered`, `data-selected`, `data-focus-visible`), `cell`.
3. `components/table.tsx` (Root): wrap RAC `Table` directly.
4. `components/table-header.tsx`: wrap RAC `TableHeader`.
5. `components/table-column.tsx`: wrap RAC `Column`, extend props with `isResizable?: boolean` (port jolly's), render inner `Group` (sort trigger area) + optional `ColumnResizer`.
6. `components/table-body.tsx`, `-row.tsx`, `-cell.tsx`: thin styled wraps of RAC `TableBody`/`Row`/`Cell`.
7. `components/table-resizable-container.tsx`: thin pass-through of RAC `ResizableTableContainer`.
8. `index.ts`: `Object.assign(TableRoot, { Root, Header, Column, Body, Row, Cell, ResizableContainer })`.

## Dependencies

None on other not-yet-migrated components. Reasonably complex — schedule after the simpler collection component (`list-box`) so the item-styling conventions (focus-visible ring, hovered/selected backgrounds) are already established and can be ported in.

## Implementation status

Built at `src/common/components/table/` exactly per the Build Steps above:
`Table`/`Header`/`Column`/`Body`/`Row`/`Cell`/`ResizableContainer`, `Object.assign`
compound export. `Column` ports jolly's `isResizable` prop + inner `Group`/
`ColumnResizer` pattern; item-styling conventions (focus-visible ring, hovered/
selected backgrounds) ported from `list-box`. Typechecks and lints clean. Now
also the render target for `data-table` (milestones 1-4) — see
`plans/tanstack-react-table-integration.md`'s own implementation status note.
