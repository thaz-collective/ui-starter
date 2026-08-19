import type { Row, RowData, TableFeatures } from '@tanstack/react-table';
import {
  filterFn_arrIncludesSome,
  filterFn_equals,
  filterFn_includesString,
  filterFn_inNumberRange,
  constructFilterFn,
} from '@tanstack/react-table';

const parseZonedDateTime = (value: unknown) => {
  if (value instanceof Temporal.ZonedDateTime) {
    return value;
  }

  return null;
};

const compare_zoned_date_time = (
  dataValue: Temporal.ZonedDateTime | null,
  filterValue: Temporal.ZonedDateTime | null,
) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.ZonedDateTime.compare(dataValue, filterValue);
};

const zoned_date_time_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parseZonedDateTime,
  resolveFilterValue: parseZonedDateTime,
} as const;

export const filter_zoned_date_time_equals = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    return compare_zoned_date_time(dataValue, filterValue) === 0;
  },
});

export const filter_zoned_date_time_greater_than = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_zoned_date_time_greater_than_or_equal = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_zoned_date_time_less_than = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_zoned_date_time_less_than_or_equal = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_zoned_date_time_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parseZonedDateTime,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parseZonedDateTime(unsafeMin);
    const max = parseZonedDateTime(unsafeMax);

    if (min !== null && max !== null && Temporal.ZonedDateTime.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (
    dataValue: Temporal.ZonedDateTime | null,
    [min, max]: [Temporal.ZonedDateTime | null, Temporal.ZonedDateTime | null],
  ) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.ZonedDateTime.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.ZonedDateTime.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});

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
