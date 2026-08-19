import type { Row, RowData, TableFeatures } from '@tanstack/react-table';
import {
  filterFn_arrIncludesSome,
  filterFn_equals,
  filterFn_includesString,
  filterFn_inNumberRange,
  constructFilterFn,
} from '@tanstack/react-table';

type TemporalRangeFilterValue<T> = [T | undefined, T | undefined];

function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

// Shared shape for every `filter_*` below: an inclusive `[min, max]` range filter
// over a single Temporal type, mirroring table-core's own `filterFn_inDateRange`
// but built on `Temporal`'s `compare` static instead of epoch-millis coercion —
// Temporal values have no `-Infinity`/`Infinity` sentinel the way numbers do, so
// open-ended bounds are represented as `undefined` and checked explicitly in
// `filter` rather than folded into the comparison itself.
function temporalRangeFilterFn<T>(
  // oxlint-disable-next-line no-explicit-any -- matches table-core's own loosely-typed `TransformDataValueFn`; each `Temporal.X.from` call needs an `XLike`, not `unknown`.
  resolve: (value: any) => T,
  compare: (a: T, b: T) => number,
) {
  return constructFilterFn({
    filter: (dataValue: T, filterValue: TemporalRangeFilterValue<T>) => {
      const [min, max] = filterValue;

      if (!isNullish(min) && compare(dataValue, min) < 0) {
        return false;
      }

      if (!isNullish(max) && compare(dataValue, max) > 0) {
        return false;
      }

      return true;
    },
    resolveDataValue: resolve,
    resolveFilterValue: (val: TemporalRangeFilterValue<unknown>) => {
      const [unsafeMin, unsafeMax] = val;

      let min: T | undefined;
      if (!isNullish(unsafeMin)) {
        min = resolve(unsafeMin);
      }

      let max: T | undefined;
      if (!isNullish(unsafeMax)) {
        max = resolve(unsafeMax);
      }

      if (!isNullish(min) && !isNullish(max) && compare(min, max) > 0) {
        [min, max] = [max, min];
      }

      return [min, max];
    },
    autoRemove: (val: TemporalRangeFilterValue<unknown>) => {
      return isFalsy(val) || (Array.isArray(val) && isFalsy(val[0]) && isFalsy(val[1]));
    },
  });
}

export const filter_zoned_date_time = temporalRangeFilterFn(
  (dataValue) => {
    if (dataValue instanceof Temporal.ZonedDateTime) {
      return dataValue;
    }

    // oxlint-disable-next-line no-unsafe-argument -- `resolve`'s param is intentionally `any`, see the comment on `temporalRangeFilterFn`.
    return Temporal.ZonedDateTime.from(dataValue);
  },
  (a, b) => Temporal.ZonedDateTime.compare(a, b),
);

export const filter_instant = temporalRangeFilterFn(
  (dataValue) => {
    if (dataValue instanceof Temporal.Instant) {
      return dataValue;
    }

    // oxlint-disable-next-line no-unsafe-argument -- see `filter_zoned_date_time`.
    return Temporal.Instant.from(dataValue);
  },
  (a, b) => Temporal.Instant.compare(a, b),
);

export const filter_plain_date_time = temporalRangeFilterFn(
  (dataValue) => {
    if (dataValue instanceof Temporal.PlainDateTime) {
      return dataValue;
    }

    // oxlint-disable-next-line no-unsafe-argument -- see `filter_zoned_date_time`.
    return Temporal.PlainDateTime.from(dataValue);
  },
  (a, b) => Temporal.PlainDateTime.compare(a, b),
);

export const filter_plain_date = temporalRangeFilterFn(
  (dataValue) => {
    if (dataValue instanceof Temporal.PlainDate) {
      return dataValue;
    }

    // oxlint-disable-next-line no-unsafe-argument -- see `filter_zoned_date_time`.
    return Temporal.PlainDate.from(dataValue);
  },
  (a, b) => Temporal.PlainDate.compare(a, b),
);

export const filter_plain_time = temporalRangeFilterFn(
  (dataValue) => {
    if (dataValue instanceof Temporal.PlainTime) {
      return dataValue;
    }

    // oxlint-disable-next-line no-unsafe-argument -- see `filter_zoned_date_time`.
    return Temporal.PlainTime.from(dataValue);
  },
  (a, b) => Temporal.PlainTime.compare(a, b),
);

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
