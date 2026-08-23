# TanStack React Table Integration Plan

Status: research/planning only. No `src/` implementation code was written for this doc.

Package versions installed via catalog (`pnpm-workspace.yaml`): `@tanstack/react-table@9.1.2`, `@tanstack/react-table-devtools@9.2.0`, `@tanstack/react-virtual@3.14.9`. All three are already dependencies in `/home/maethron/codingProjects/thazCollective/ui-starter/package.json` (`dependencies` block) — **no addition needed for those three**.

Research method: read every file under `examples/react/kitchen-sink-react-aria/src/` in the local `tanStack/table` monorepo checkout (React Aria Components + TanStack Table v9, the closest architectural match to this repo), skimmed `examples/react/material-react-table/src` for feature-coverage ideas, and skimmed `packages/table-core/src/features/*` for the authoritative feature list. Also read `plans/table.md` (our own planned presentational `<Table>`) and `plans/tanstack-react-form-v2-integration.md` (format/tone reference) first.

**Important version note:** v9 is a significant API shift from the "classic" `useReactTable(options)` single-hook API most existing tutorials/blog posts describe. v9 introduces `tableFeatures({...})` (an explicit opt-in feature registry) plus `createTableHook({ features, tableComponents, cellComponents, headerComponents, ... })`, which returns a bespoke `useAppTable` hook, a `createAppColumnHelper`, and context hooks (`useTableContext`, `useCellContext`, `useHeaderContext`). State reads inside cell/header components use a `table.Subscribe`/`table.atoms.*` fine-grained-reactivity mechanism (store-based, similar in spirit to `@tanstack/react-store`) rather than each cell re-rendering off full table state. Everything below is written against this v9 shape, not the v8 `useReactTable` shape — this is a deliberate, confirmed finding, not an oversight.

## 1. Overview

`@tanstack/react-table` is a **headless** table/datagrid engine: it owns row models, column defs, sorting/filtering/grouping/selection/pagination _state and derivation logic_, but renders nothing itself — you own every DOM node. This is exactly the shape our library already commits to for every other primitive: RAC owns interaction/accessibility behavior, we own markup + `tv()` styling, nothing is hidden behind a black-box render method. A table integration fits the same mold: `@tanstack/react-table` owns "what rows/columns/state exist," RAC's semantic `Table`/`TableHeader`/`Column`/`TableBody`/`Row`/`Cell` (already planned in `plans/table.md`) own the actual accessible `<table>` markup and interaction (focus, keyboard nav, resize, sort-Button semantics), and our compound components glue the two together via small render-prop cells.

Because this is a copy-paste, no-registry library, the goal is not "one `<DataTable rows={} columns={}>` mega-component" — it's a `data-table` folder of small composable parts (mirroring `list-box`, `table`, etc.) that a consuming app assembles per-use-case, the same way `plans/table.md`'s plain `<Table>` is assembled. A full-featured table (sorting + filtering + selection + grouping + virtualization + DnD all at once) is possible but should not be the _only_ shape offered — most consumers will want a subset.

## 2. Dependencies

| Package                                                                          | Status                                      | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@tanstack/react-table`                                                          | **Already present** (`catalog:` → `9.1.2`)  | v9 API — see version note above.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `@tanstack/react-table-devtools`                                                 | **Already present** (`catalog:` → `9.2.0`)  | Optional dev-only aid; wire via `useTanStackTableDevtools(table)` + `<TanStackDevtools plugins={[tableDevtoolsPlugin()]} />`, same pattern as `@tanstack/react-form-devtools` already used elsewhere in this repo.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `@tanstack/react-virtual`                                                        | **Already present** (`catalog:` → `3.14.9`) | Needed for row virtualization (feature 3 below). Not currently wired to anything since the table itself doesn't exist yet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/modifiers`, `@dnd-kit/utilities` | **Not present — needs adding**              | Confirmed via kitchen-sink-react-aria's own `package.json`: `@dnd-kit/core@^6.3.1`, `@dnd-kit/sortable@^10.0.0`, `@dnd-kit/modifiers@^9.0.0`, `@dnd-kit/utilities@^3.2.2`. This is the DnD library the example actually uses (imports confirmed in `data-table-view-options.tsx`: `DndContext`, `PointerSensor`, `closestCenter`, `useSensor`, `useSensors` from `@dnd-kit/core`; `SortableContext`, `arrayMove`, `verticalListSortingStrategy` from `@dnd-kit/sortable`). Add all four to `pnpm-workspace.yaml`'s catalog + this repo's `dependencies`, matching the versions above (or latest compatible — these are the example's pinned minimums). |
| `@tanstack/match-sorter-utils`                                                   | Not present, **optional**                   | Used by the example only to implement a `fuzzy` global-filter function (`rankItem`). Not required — a simpler substring/`includes` global filter works without it — but worth adding if we want fuzzy-match parity with the example. Call out as optional in the filtering section below rather than a hard dependency.                                                                                                                                                                                                                                                                                                                                |

No dependency is needed purely for grouping, aggregation, sorting, column visibility, row selection, or column/global filtering — those are all built into `table-core` itself, just gated behind explicit `tableFeatures({...})` opt-in (see below).

## 3. Architecture / Component Breakdown

### RAC has no table-specific headless-data primitive, but it does have real `<table>` primitives

RAC ships `Table`, `TableHeader`, `Column`, `ColumnResizer`, `TableBody`, `Row`, `Cell`, `ResizableTableContainer`, `Group` — these render real semantic `<table>/<thead>/<th>/<tbody>/<tr>/<td>` elements with full ARIA grid semantics, keyboard navigation, sort-button wiring (`allowsSorting`, `aria-sort`), and resize handles. This is precisely what our own not-yet-built `plans/table.md` compound `Table` already wraps. **Decision: reuse `plans/table.md`'s planned `Table` compound (`Table.Root/Header/Column/Body/Row/Cell/ResizableContainer`) as the render target for this integration**, rather than inventing parallel plain-HTML table markup. `plans/table.md` should be built first (or in parallel) as a prerequisite primitive; this plan's `data-table` folder composes on top of it rather than duplicating it. This mirrors the kitchen-sink-react-aria example, which renders TanStack Table's row/column model directly into RAC's `AriaTable`/`TableHeader`/`AriaColumn`/`TableBody`/`Row`/`Cell` (confirmed in its `main.tsx`).

Where RAC's `Table` markup and TanStack Table's model disagree slightly (e.g. RAC wants `<Column>` elements up front with `id`s; TanStack wants header-group objects with a `.getSize()`/pinning offsets that must land in `style`), the glue lives in the `data-table` layer, not by changing `table.md`'s primitive.

### Proposed folder: `src/common/components/data-table/`

Following the existing one-folder-per-concept + `Root`/parts convention:

```
data-table/
  index.ts                    # exports the table-hook factory + component re-exports
  variants.ts                 # tv() slots for toolbar, column-header button, resize handle, group-toggle, etc.
  lib/
    create-data-table.ts      # thin wrapper around createTableHook (see below) — NOT a component
    dynamic-filter-function.ts             # optional dynamic/fuzzy filter fn(s)
  components/
    data-table-toolbar.tsx        # search input + FilterList/SortList/ViewOptions slot container
    data-table-column-header.tsx  # sort button + column menu (sort/group/pin/hide), mirrors example's ColumnHeader
    data-table-resize-handle.tsx  # column resize handle, wraps RAC ColumnResizer or a manual mousedown handle
    data-table-select-cell.tsx    # row selection checkbox cell
    data-table-select-all-header.tsx
    data-table-grouped-cell.tsx   # expand/collapse + subrow-count cell for grouped rows
    data-table-pagination.tsx     # optional, only if pagination feature is adopted
    data-table-filter-list.tsx    # column filter chips/builder UI
    data-table-sort-list.tsx      # multi-sort list UI (drag-reorderable)
    data-table-view-options.tsx   # column visibility + column-order (drag-reorderable) popover
```

This is **not** a single compound object like `TextField`/`Table` because a table integration is inherently a _hook factory_ (`useAppTable`) plus a set of independently-usable pieces consumers pick from — there is no single sensible `<DataTable.Root>` since the "root" is really `useAppTable(...)` called in the consumer's own component (it needs their `columns`/`data`, which can't be generic-prop-drilled the way `<TextField value>` can). Instead, `create-data-table.ts` exports a **factory function** (thin wrapper over `createTableHook`) that a consuming app calls once per distinct table shape to get its own typed `useAppTable`/`createAppColumnHelper`, then imports the presentational pieces (`DataTableColumnHeader`, `DataTableSelectCell`, etc.) piecemeal into its own column defs — exactly the pattern the example demonstrates (`src/hooks/table.ts` calls `createTableHook` once at module scope, then `src/columns.tsx` imports `createAppColumnHelper` from it to build `columnHelper.accessor(...)` defs that reference `header.ColumnHeader`/`cell.TextCell`).

### State management: controlled state lives with the consumer, uncontrolled fallback via table-core

TanStack Table already supports both modes per state slice (`state.sorting` + `onSortingChange` = controlled; omit both = internally managed). Recommend documenting both, same stance as the form-v2 plan takes on manual-wiring vs. registered-component:

- **Simple/internal**: don't pass `state`/`onXChange` for a given slice — table-core manages it internally, consumer just calls `table.getState().sorting` etc. read-only when needed.
- **Controlled** (needed when the parent must react to state, e.g. persisting filters to the URL, or `columnFilters`/`globalFilter` need to be lifted for a "clear all" toolbar button, as the example does): pass `state: { columnFilters, globalFilter }` + `onColumnFiltersChange`/`onGlobalFilterChange`, exactly as `main.tsx`'s `App()` does with `React.useState`.

Selection, sorting, grouping, visibility, column order, column sizing, and pinning can all stay uncontrolled/internal unless a specific consumer need arises (e.g. persisting selection across a route change) — don't over-lift by default.

## 4. Per-feature integration notes

### Sorting

- Maps to `rowSortingFeature` + `createSortedRowModel()` in `tableFeatures({...})`.
- No extra dependency.
- Wiring: `column.getCanSort()`, `column.toggleSorting()`/`toggleSorting(desc: boolean)`, `column.getIsSorted()` (`false | 'asc' | 'desc'`), rendered via a `Button` inside the column header (`data-table-column-header.tsx`) that also sets RAC's `<Column allowsSorting aria-sort={...}>` on the `table.md` `Table.Column` wrapper so RAC's own keyboard/ARIA sort semantics stay correct — confirmed pattern from the example's `getAriaSort()` helper in `main.tsx` and `ColumnHeader` component.
- Custom sort functions (`sortFns: { alphanumeric, datetime, text }` registered at `tableFeatures()` time, referenced per-column via `sortingFn: 'datetime'`) are available out of the box from `table-core` (`sortFn_alphanumeric`, `sortFn_datetime`, `sortFn_text` exports) — no need to hand-roll comparators for common types.

### Column visibility

- Maps to `columnVisibilityFeature`.
- No extra dependency (DnD only needed if visibility list is also reorderable — see below).
- Wiring: `column.getCanHide()`, `column.toggleVisibility(bool)`, `column.getIsVisible()` — filter `header.getVisibleCells()`/`row.getVisibleCells()` when rendering, and filter the header-group's `.headers` by `header.column.getIsVisible()` before mapping to `Table.Column`s (confirmed pattern in `main.tsx`: `.filter((header) => header.column.getIsVisible())`).
- `DataTableViewOptions` component: a `Popover` + checkbox list, one row per hideable column, `isSelected={column.getIsVisible()}` / `onChange={(v) => column.toggleVisibility(v)}`.

### Column filtering

- Maps to `columnFilteringFeature` + `createFilteredRowModel()`.
- No extra dependency required; `@tanstack/match-sorter-utils` optional for fuzzy per-column filters.
- Wiring: per-column `meta: { variant: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multi-select', options?: [...] }` (a convention from the example, not a table-core requirement) drives a generic `DataTableFilterList` UI that renders the right control (text input, select, date range, etc.) per column based on its declared `variant`. `column.setFilterValue(...)`, controlled `columnFilters` state (`ColumnFiltersState` = `{ id, value }[]`) lifted to the consumer if a "clear all filters" affordance is wanted (as in the example).
- `defaultColumn.filterFn` can be a single "dynamic" dispatcher function that branches on the column's declared `meta.variant` (the example's `dynamicFilterFn` from `lib/data-table.ts`) rather than setting `filterFn` per column — worth adopting as a convention to keep column defs terse.

### Global filtering

- Maps to `globalFilteringFeature`.
- Optional dependency: `@tanstack/match-sorter-utils`' `rankItem` for a fuzzy match (`globalFilterFn: 'fuzzy'` registered via `filterFns: { fuzzy: fuzzyFilterFn }` in `tableFeatures()`), confirmed exact pattern in `hooks/features.ts`. A plain substring filter works with zero extra dependency if fuzzy matching isn't required.
- Wiring: single search `Input`, debounced (the example uses `@tanstack/react-pacer`'s `useDebouncedCallback`, already a dependency in this repo — reuse it rather than adding another debounce utility), controlled `globalFilter` state, `state: { globalFilter }` + `onGlobalFilterChange: setGlobalFilter`.

### Row selection

- Maps to `rowSelectionFeature`.
- No extra dependency.
- Wiring: `enableRowSelection: true` at `createTableHook()` time, `getRowId: (row) => row.id` (strongly recommended for selection to survive data refetches/re-sorts by stable id rather than index), `row.toggleSelected(bool)`/`row.getIsSelected()`, header "select all" via `table.toggleAllPageRowsSelected(bool)`/`table.getIsAllPageRowsSelected()`/`getIsSomePageRowsSelected()` (indeterminate state) — confirmed pattern in `header-components.tsx`'s `SelectAllHeader` and `cell-components.tsx`'s `SelectCell`. Selection state reads should go through `table.Subscribe`/`table.atoms.rowSelection` (v9's fine-grained reactivity) so toggling one row's checkbox doesn't re-render every cell in the table — this is a real perf-relevant pattern from v9, not incidental.
- `table.getSelectedRowModel().flatRows` gives the current selection for consumer use (bulk actions toolbar, etc.).

### Grouping

- Maps to `columnGroupingFeature` + `createGroupedRowModel()`.
- No extra dependency.
- Wiring: `column.getCanGroup()`, `column.getToggleGroupingHandler()`/`toggleGrouping()`, `column.getIsGrouped()`; grouped rows render an expand/collapse toggle (`row.getToggleExpandedHandler()`, `row.getCanExpand()`, `row.getIsExpanded()`) with `row.depth`-based indent and `row.subRows.length` count — confirmed pattern in `cell-components.tsx`'s `GroupedCell`. Requires `rowExpandingFeature` + `createExpandedRowModel()` alongside grouping (expand/collapse is how grouped rows show/hide their children) — call this dependency-between-features out explicitly in the build-order doc since it's easy to enable grouping and forget expanding.

### Aggregation

- Maps to `rowAggregationFeature`.
- No extra dependency; built-in aggregation fns available (`aggregationFn_mean`, `aggregationFn_min`, and others in `table-core` not used by the example but presumably `max`/`sum`/`count`/`extent`/`uniqueCount` following v8 naming) registered via `aggregationFns: { mean: aggregationFn_mean, ... }` in `tableFeatures()`, referenced per-column as `aggregationFn: 'mean'`.
- Wiring: per-column `aggregatedCell: () => <CustomAggregatedCell />` render function, only shown when a row is a grouped/collapsed row for a _different_ column than the one being grouped by — confirmed pattern: `age` column has `aggregationFn: 'mean'` + `aggregatedCell: () => <AgeAggregatedCell />`, while the grouped-by column itself (`status`/`department` in the example) sets `aggregatedCell: () => null` since its own `GroupedCell` already shows the group label + count.

### Drag-and-drop reordering (columns and rows)

- Column order maps to `columnOrderingFeature`; row reordering isn't a distinct `table-core` feature — row order is just data-array order, so DnD-driven row reordering means the consumer reorders their own `data` array on drop and table-core reflects it on next render (no dedicated row-order state slice to wire).
- **Extra dependency required**: `@dnd-kit/core` + `@dnd-kit/sortable` (+ `@dnd-kit/modifiers`/`@dnd-kit/utilities` as used by the example) — none of this is bundled with `@tanstack/react-table`.
- Important finding: **the example does not wire DnD onto the actual table body rows or header cells** — it's only used inside two popovers: `DataTableViewOptions` (drag-reorder the column-visibility list, which calls `table.setColumnOrder(arrayMove(...))`) and `DataTableSortList` (drag-reorder active multi-sort criteria). This is a reasonable, lower-risk starting scope to copy directly (list-reorder-in-a-popover is a well-worn dnd-kit pattern: `DndContext` + `SortableContext` + `useSensor(PointerSensor, { activationConstraint: { distance: 6 } })` + `arrayMove` on `onDragEnd`). Reordering columns _in the header row itself_ or reordering _table body rows by dragging_ would need a fresh `DndContext` wrapping the RAC `Table`/`TableHeader`/`TableBody`, each `Column`/`Row` wrapped as a dnd-kit sortable item (`useSortable`) — doable, but not demonstrated in this reference example, so budget extra design/testing time and treat it as a distinct, higher-risk milestone from the popover-based reordering.
- Wiring sketch (popover case, directly portable): `const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))`, `<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}><SortableContext items={ids} strategy={verticalListSortingStrategy}>...</SortableContext></DndContext>`, `onDragEnd = ({active, over}) => { if (!over || active.id === over.id) return; table.setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex)) }`.

### Virtualization

- Not a `table-core` feature — orthogonal, applied at the render layer only.
- **Extra dependency**: none to add (`@tanstack/react-virtual@3.14.9` already present) but **not used anywhere in the kitchen-sink-react-aria example** (confirmed: no `@tanstack/react-virtual` import in its `package.json` or `src/`, despite the example's own "Stress Test (1M rows)" button implying it needs virtualization or pagination to stay usable — it in fact relies on `rowPaginationFeature`/`createPaginatedRowModel()` instead for the 1M-row case, not virtualization). This means our RAC-specific virtualization wiring has **no directly-reusable reference implementation** in this example and must be designed from `@tanstack/react-virtual`'s own docs/general React patterns rather than ported.
- General approach (standard `@tanstack/react-virtual` + TanStack Table pairing, not RAC-specific): `useVirtualizer({ count: rows.length, getScrollElement: () => scrollRef.current, estimateSize: () => 40, overscan: 10 })` on the _scroll container_ wrapping the table body, then render only `virtualizer.getVirtualItems()` rows with absolute-positioned or `transform: translateY(...)` offsets. **Risk**: RAC's `TableBody`/`Row` render real `<tbody>/<tr>` which don't support arbitrary `position: absolute` children the way a `div`-based grid does — sparse/windowed real `<tr>` rendering inside a real `<table>` works (browsers handle non-contiguous `<tr>`s fine) but the common "translateY spacer div" virtualization trick used for `<div>` grids needs adaptation: use a fixed-height leading/trailing spacer `<tr>` with a `height` cell, or accept a fixed-row-height `<tbody>` with `padding-top`/`padding-bottom` on a wrapper, rather than transform-positioned rows. This needs a small prototype/spike before committing to a specific technique — flag as an open risk below rather than asserting a specific working recipe.

## 5. Additional features to consider (not in the original request)

- **Column resizing** (`columnResizingFeature`/`columnSizingFeature`) — near-universal expectation once a table has more than a few columns; `plans/table.md` already plans for RAC's `ColumnResizer` + `ResizableTableContainer`, so this is mostly "wire table-core's `header.getResizeHandler()`/`column.getSize()` into CSS custom properties" (confirmed pattern: `--header-{id}-size`/`--col-{id}-size` vars set via `React.useMemo` off `table.state.columnSizing`, consumed in each header/cell's inline `style`).
- **Column pinning** (`columnPinningFeature`) — commonly wanted alongside a selection checkbox column (pin start) and an actions/menu column (pin end), exactly as the example does (`initialState: { columnPinning: { start: ['select'], end: ['actions'] } }`) — worth including from the start since it directly interacts with column ordering/sizing CSS (sticky offsets computed from `column.getStart('start')`/`column.getAfter('end')`).
- **Row pinning** (`rowPinningFeature`) — less universally needed than column pinning but common in "pin this row while I compare" UX (e.g. spreadsheet-like tools); not seen wired in the example but exists as a `table-core` feature, cheap to expose once row selection exists.
- **Row expanding / sub-rows** (`rowExpandingFeature`) — required as a co-dependency of grouping (see above), but also independently useful for tree-data / nested-detail-row UX even without grouping — worth documenting as its own feature, not just "grouping's helper."
- **Pagination** (`rowPaginationFeature`) — the example's own answer to large datasets (used for the 1M-row stress test) rather than virtualization; likely wanted as an alternative-or-complementary strategy to virtualization for consumers who prefer classic page-by-page navigation (better for deep-linkable/bookmarkable table state, worse for infinite/continuous browsing) — `DataTablePagination` component (page-size select, prev/next, page count) should be planned alongside virtualization as a milestone, not skipped in favor of it.
- **Column faceting** (`columnFacetingFeature` + `createFacetedRowModel()`/`createFacetedUniqueValues()`) — needed to power "distinct values for this column" filter-dropdown lists (e.g. a `select`/`multi-select` column filter needs to know what values actually occur in the data, with counts) — directly relevant to the `meta.options`/`variant: 'select'` filtering convention already noted above; without faceting, filter dropdowns need hardcoded option lists instead of data-derived ones.
- **Editable cells** — not a dedicated `table-core` feature (no `cellEditingFeature` in the `features/` directory listing), but an extremely common ask for any "data grid" positioned against Excel-like use cases; would be entirely userland (cell component owns its own edit-mode state + calls back to a consumer-provided `onCellEdit`/mutates the row's data array) — flagging since it's commonly requested but deliberately out of `table-core`'s scope, so our plan should note it's a "you'd build this yourself on top" item, not something a `tableFeatures()` flag turns on.

## 6. Step-by-step build order

Milestones sized to be buildable/reviewable incrementally, each shippable/usable on its own:

1. **Prerequisite**: build `plans/table.md`'s plain `Table` compound (`Root/Header/Column/Body/Row/Cell/ResizableContainer`) if not already done — this integration renders into it rather than raw HTML.
2. **Base headless table + sorting + column visibility + column sizing/resizing**: `create-data-table.ts` factory (`createTableHook` wrapper), `DataTableColumnHeader` (sort button + basic menu), CSS-var-driven sizing wired to `table.md`'s `Column`/`Cell`/`ResizableContainer`. No filtering/selection/grouping yet — smallest usable slice, proves the RAC↔table-core render glue works.
3. **Column filtering + global filtering**: `DataTableFilterList`, search input with debounce (reuse existing `@tanstack/react-pacer` dependency), `meta.variant`-driven filter control dispatch, `dynamicFilterFn` convention.
4. **Row selection**: `DataTableSelectCell`/`DataTableSelectAllHeader`, `table.Subscribe`/`atoms.rowSelection` fine-grained reactivity pattern, `getRowId` convention.
5. **Column pinning**: sticky-position CSS helper (`getCommonPinningStyles` equivalent), pin/unpin menu items in `DataTableColumnHeader`. (Grouped here as a natural pairing with the select/actions-column pinning pattern from milestone 4, per the "additional features" note above.)
6. **Grouping + row expanding + aggregation**: `DataTableGroupedCell`, per-column `aggregatedCell`, expand/collapse toggle, explicitly wiring `rowExpandingFeature` alongside `columnGroupingFeature`.
7. **Pagination**: `DataTablePagination` component — build before or alongside virtualization since it's the example's own proven answer to large datasets and is far lower-risk than the RAC+virtual-row spike in milestone 8.
8. **Virtualization**: spike/prototype the RAC `<tbody>`/`<tr>` windowing technique (spacer-row vs. padding approach — see open risk above) before committing to the final component shape; then build `DataTableVirtualBody` (or equivalent) as an alternate `Table.Body` swap-in for large-dataset consumers who want continuous scroll instead of pagination.
9. **Drag-and-drop reordering**: add `@dnd-kit/*` dependencies; start with the low-risk popover-list-reorder pattern (column-order list in `DataTableViewOptions`, sort-criteria list in `DataTableSortList`) ported near-directly from the example; treat in-header column-drag-reorder and row-drag-reorder as a follow-up sub-milestone since the example doesn't demonstrate either.
10. **Row pinning + editable cells** (stretch, lower priority): only after the above are stable and a concrete consumer need arises.

## 7. Open questions / risks

- **v9 API stability**: `@tanstack/react-table@9.1.2` is a young major version with a materially different API shape (`tableFeatures`/`createTableHook`/`Subscribe`/`atoms`) from the widely-documented v8 `useReactTable`. Most blog posts, Stack Overflow answers, and AI training data will describe the _wrong_ API. Recommend treating the local `kitchen-sink-react-aria` example and `table-core`'s own `.d.ts`/`features/*` source as the only trustworthy references during implementation, not general web search, until v9 docs/tutorials catch up.
- **RAC `<tbody>`/`<tr>` virtualization technique is unverified**: as noted in the Virtualization section, no reference implementation exists in the example repos read for this plan. This is the single riskiest item in the plan and should get a small throwaway spike before milestone 8 is scheduled for real.
- **In-header column drag-reorder and row drag-reorder are undemonstrated**: the example only drag-reorders two off-canvas popover lists, not the live table header/body. Actual column-header dragging interacts with RAC's own `Column` keyboard/focus handling and sticky-pinned-column CSS offsets — plausibly more fiddly than the popover case. Treat milestone 9's "follow-up sub-milestone" as genuinely open scope, not a small extension.
- **`@tanstack/match-sorter-utils` fuzzy filtering**: optional; decide whether global/column fuzzy search is a real requirement before adding it, since a plain substring filter avoids one more dependency.
- **`getRowId` / stable ids**: the example always supplies `getRowId: (row) => row.id`. Any consumer data shape without a stable unique id will need one synthesized before row selection/pinning/expansion state can survive re-sorts or refetches reliably — worth calling out as a documented precondition, not an edge case.
- **Interaction with `plans/table.md`**: that file describes a simple _presentational_ `<Table>` with no data-modeling opinions; this plan deliberately treats it as a dependency/render-target rather than merging the two docs, per the task's explicit instruction. If `table.md`'s build order and this plan's milestone 1 diverge in practice (e.g. `table.md` gets built with assumptions that don't survive contact with TanStack Table's header-group/pinning offset requirements), that primitive may need a small revision pass — flagging as a coordination risk between the two plans, not asserting it will definitely happen.
- **No pagination/virtualization combination explored**: table-core supports pagination and virtualization independently, but combining both (virtualized rows _within_ one page) wasn't researched here since the example uses only pagination for its large-dataset case — likely unnecessary complexity unless a specific consumer need for both together emerges.

## Implementation status

Milestones 1-4 (of the section 6 build order) are built at
`src/common/components/data-table/`:

- **Milestone 1**: `lib/create-data-table.ts` (`createDataTable()` factory
  wrapping `createTableHook`), `lib/features.ts` (`dataTableFeatures` registry —
  sorting, row selection, column visibility/sizing/resizing, column + global
  filtering), `lib/context.ts` (explicit `createTableHookContexts()` set, reused
  across every `createDataTable()` call — necessary because, unlike the
  kitchen-sink example's module-scope singleton, this library's factory can be
  called more than once per app).
- **Milestone 2**: `DataTableColumnHeader` (sort button + `aria-sort` via
  `column.getIsSorted()`/`toggleSorting()`, a hide-column menu), `lib/column-size-vars.ts`
  (`getColumnSizeVars(table)` — CSS-var-driven sizing wired into `table.md`'s
  `Column`/`Cell`/`ResizableContainer`), column visibility (`getCanHide`/
  `toggleVisibility`).
- **Milestone 3**: `DataTableFilterList` (a simplified column-filter popover —
  one control per column dispatched on `meta.variant`, no per-filter operator/
  join-operator UI, unlike the kitchen-sink example's fuller `FilterList`),
  `DataTableSearch` (global filter, debounced via `@tanstack/react-pacer`'s
  `useDebouncedCallback` — confirmed already a dependency), `lib/filter-fns.ts`'s
  `dynamicFilterFn` (dispatches on `meta.variant`, registered as
  `defaultColumn.filterFn`).
- **Milestone 4**: `DataTableSelectCell`/`DataTableSelectAllHeader`, both reading
  selection via `table.Subscribe(source: table.atoms.rowSelection)` per the
  fine-grained-reactivity note above, `getRowId` left to the consumer's
  `useAppTable` call (not hardcoded in the factory, since it's data-shape
  specific).

**Not built** (milestones 5-10, unchanged from the plan): column pinning,
grouping + row expanding + aggregation, pagination, virtualization, drag-and-drop
reordering, row pinning + editable cells. A future pass can resume directly at
milestone 5.

**API surprises / corrections found during implementation** (v9's actual shipped
types vs. this doc's expectations):

- `createTableHook`'s `tableContext`/`cellContext`/`headerContext` options (and
  the standalone `createTableHookContexts()` escape hatch) aren't mentioned in
  this plan doc at all, but turned out to be load-bearing: `createDataTable()`
  is a **factory** a consumer can call more than once, whereas the reference
  example calls `createTableHook` exactly once at module scope. Registering
  `DataTableColumnHeader`/`DataTableSelectCell`/`DataTableSelectAllHeader` as
  built-in `headerComponents`/`cellComponents` while also letting those same
  components import `useDataTableTableContext`/`useDataTableHeaderContext`
  independently of any specific `createDataTable()` call required minting one
  explicit context set up front (`lib/context.ts`) and passing it into every
  `createDataTable()` call, plus splitting `lib/features.ts` out from
  `lib/create-data-table.ts` to avoid an import cycle between the factory and
  the built-in components.
- `dynamicFilterFn` cannot be registered in `tableFeatures({ filterFns: { dynamic: dynamicFilterFn } })`
  the way the plan's "per-column `meta: { variant }`... `dynamicFilterFn`
  convention" note implies, if `dynamicFilterFn` itself needs to read
  `columnMeta` typed by that same `tableFeatures()` call — that's a genuine
  type-level cycle (`features.ts` -> `dynamic-filter-function.ts` -> `features.ts`), not just
  a lint nit. Fix: keep `dynamicFilterFn` generic over `TFeatures extends
TableFeatures` (not pinned to `DataTableFeatures`) and pass it directly as
  `defaultColumn.filterFn` (a plain function value) rather than through the
  named `filterFns` registry, which sidesteps the cycle since `defaultColumn`
  doesn't require the registry's exact `TFeatures` binding.
- `ReactTable.store` (and therefore `<table.Subscribe source={table.store}>`) is
  marked `@deprecated` in the shipped types even though it's the exact pattern
  `header-components.tsx`'s `ColumnHeader` uses in the kitchen-sink example —
  worth confirming isn't scheduled for removal. Used the recommended alternative
  in `DataTableColumnHeader` instead: `<table.Subscribe selector={...}>` without
  a `source` (the third overload, which defaults to `table`'s own store).
- Otherwise the plan's read of the shipped API held up exactly: `createTableHook`'s
  options/return shape, `tableFeatures({...})` registry pattern, `Subscribe`/
  `atoms` fine-grained reactivity, and the built-in `filterFn_*`/`sortFn_*`
  exports all matched what's actually in `@tanstack/react-table@9.1.2`'s
  `.d.ts` files.
