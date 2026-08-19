import {
  columnFilteringFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createFilteredRowModel,
  createSortedRowModel,
  globalFilteringFeature,
  metaHelper,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_datetime,
  sortFn_text,
  tableFeatures,
} from '@tanstack/react-table';

import type { DataTableColumnMeta } from '#src/common/components/data-table/lib/filter-fns';

// v9's `tableFeatures({...})` is an explicit opt-in registry (unlike v8's
// single `useReactTable(options)` hook, where every feature was always
// present) — only sorting, column visibility/sizing/resizing, column +
// global filtering, and row selection are registered here since those are
// the only features this library builds support for so far (milestones
// 1-4 of the integration plan). Grouping/aggregation/pagination/pinning
// etc. are deliberately not registered — consumers needing them should
// extend this factory rather than expect it silently supports them.
export const dataTableFeatures = tableFeatures({
  rowSortingFeature,
  rowSelectionFeature,
  columnVisibilityFeature,
  columnSizingFeature,
  columnResizingFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, datetime: sortFn_datetime, text: sortFn_text },
  columnMeta: metaHelper<DataTableColumnMeta>(),
});

export type DataTableFeatures = typeof dataTableFeatures;
