import type { Row, RowData, TableFeatures } from '@tanstack/react-table';
import {
  filterFn_arrIncludesSome,
  filterFn_equals,
  filterFn_includesString,
  filterFn_inNumberRange,
} from '@tanstack/react-table';

export interface DataTableColumnMeta {
  label?: string;
  variant?: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multi-select';
  options?: { label: string; value: string; count?: number }[];
}

function isFalsy(value: unknown) {
  return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
}

// Dispatches on the column's declared `meta.variant` so a single `filterFn` can be
// registered as `defaultColumn.filterFn`, keeping per-column defs terse — mirrors
// the kitchen-sink-react-aria example's `dynamicFilterFn` convention (simplified:
// no per-filter operator/join-operator UI, just one value per column). Generic
// over `TFeatures`/`TData` (rather than fixed to `DataTableFeatures`) so it stays
// assignable to any table's `defaultColumn.filterFn`, including this module's own
// `columnMeta` slot definition in `./features` — pinning it to `DataTableFeatures`
// here would create an import cycle (`features.ts` -> `filter-fns.ts` -> `features.ts`).
export function dynamicFilterFn<TFeatures extends TableFeatures, TData extends RowData>(
  row: Row<TFeatures, TData>,
  columnId: string,
  filterValue: unknown,
): boolean {
  if (isFalsy(filterValue)) {
    return true;
  }

  const meta: DataTableColumnMeta | undefined = row.table.getColumn(columnId)?.columnDef.meta;
  const { variant } = meta ?? {};

  if (variant === 'number') {
    if (Array.isArray(filterValue)) {
      return filterFn_inNumberRange(row, columnId, filterValue);
    }

    return filterFn_equals(row, columnId, filterValue);
  }

  if (variant === 'boolean' || variant === 'select') {
    return filterFn_equals(row, columnId, filterValue);
  }

  if (variant === 'multi-select') {
    return filterFn_arrIncludesSome(row, columnId, filterValue);
  }

  return filterFn_includesString(row, columnId, filterValue);
}
