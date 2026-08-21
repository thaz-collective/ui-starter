// import type { Row, RowData, TableFeatures } from '@tanstack/react-table';
import {
  // filterFn_arrIncludesSome,
  // filterFn_equals,
  // filterFn_includesString,
  // filterFn_inNumberRange,
  constructFilterFn,
} from '@tanstack/react-table';

export type StringFilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'empty'
  | 'notEmpty';

export interface StringFilterValue {
  operator: StringFilterOperator;
  filterValue: string | null;
}

export function isStringFilterValue(value: unknown): value is StringFilterValue {
  return value !== null && value !== undefined && typeof value === 'object' && 'operator' in value;
}

export const STRING_FILTER_OPERATORS: { value: StringFilterOperator; label: string }[] = [
  { value: 'equals', label: 'Equals' },
  { value: 'notEquals', label: 'Does not equal' },
  { value: 'contains', label: 'Contains' },
  { value: 'notContains', label: 'Does not contain' },
  { value: 'startsWith', label: 'Starts with' },
  { value: 'endsWith', label: 'Ends with' },
  { value: 'empty', label: 'Is empty' },
  { value: 'notEmpty', label: 'Is not empty' },
];

function normalize(value: unknown) {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }

  return '';
}

export const filter_string = constructFilterFn({
  autoRemove: (val: unknown) => val === undefined || val === null,
  filter: (dataValue: unknown, filterValue: StringFilterValue) => {
    const normalizedData = normalize(dataValue);
    const normalizedFilterValue = normalize(filterValue.filterValue);

    switch (filterValue.operator) {
      case 'equals': {
        return normalizedData === normalizedFilterValue;
      }

      case 'notEquals': {
        return normalizedData !== normalizedFilterValue;
      }

      case 'contains': {
        return normalizedData.includes(normalizedFilterValue);
      }

      case 'notContains': {
        return !normalizedData.includes(normalizedFilterValue);
      }

      case 'startsWith': {
        return normalizedData.startsWith(normalizedFilterValue);
      }

      case 'endsWith': {
        return normalizedData.endsWith(normalizedFilterValue);
      }

      case 'empty': {
        return normalizedData === '';
      }

      case 'notEmpty': {
        return normalizedData !== '';
      }

      default: {
        return true;
      }
    }
  },
});

// export interface DataTableColumnMeta {
//   label?: string;
//   variant?: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multi-select';
//   options?: { label: string; value: string; count?: number }[];
// }
//
// function isFalsy(value: unknown) {
//   return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
// }
//
// // Dispatches on the column's declared `meta.variant` so a single `filterFn` can be
// // registered as `defaultColumn.filterFn`, keeping per-column defs terse — mirrors
// // the kitchen-sink-react-aria example's `dynamicFilterFn` convention (simplified:
// // no per-filter operator/join-operator UI, just one value per column). Generic
// // over `TFeatures`/`TData` (rather than fixed to `DataTableFeatures`) so it stays
// // assignable to any table's `defaultColumn.filterFn`, including this module's own
// // `columnMeta` slot definition in `./features` — pinning it to `DataTableFeatures`
// // here would create an import cycle (`features.ts` -> `filter-fns.ts` -> `features.ts`).
// export function dynamicFilterFn<TFeatures extends TableFeatures, TData extends RowData>(
//   row: Row<TFeatures, TData>,
//   columnId: string,
//   filterValue: unknown,
// ): boolean {
//   if (isFalsy(filterValue)) {
//     return true;
//   }
//
//   const meta: DataTableColumnMeta | undefined = row.table.getColumn(columnId)?.columnDef.meta;
//   const { variant } = meta ?? {};
//
//   if (variant === 'number') {
//     if (Array.isArray(filterValue)) {
//       return filterFn_inNumberRange(row, columnId, filterValue);
//     }
//
//     return filterFn_equals(row, columnId, filterValue);
//   }
//
//   if (variant === 'boolean' || variant === 'select') {
//     return filterFn_equals(row, columnId, filterValue);
//   }
//
//   if (variant === 'multi-select') {
//     return filterFn_arrIncludesSome(row, columnId, filterValue);
//   }
//
//   return filterFn_includesString(row, columnId, filterValue);
// }
