import {
  aggregationFn_sum,
  aggregationFn_min,
  aggregationFn_max,
  aggregationFn_extent,
  aggregationFn_mean,
  aggregationFn_median,
  aggregationFn_unique,
  aggregationFn_uniqueCount,
  aggregationFn_first,
  aggregationFn_last,
  createFilteredRowModel,
  createSortedRowModel,
  createExpandedRowModel,
  createFacetedRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createColumnHelper,
  filterFn_arrIncludes,
  filterFn_arrIncludesAll,
  filterFn_arrHas,
  filterFn_arrIncludesSome,
  filterFn_between,
  filterFn_betweenInclusive,
  filterFn_empty,
  filterFn_endsWith,
  filterFn_equals,
  filterFn_equalsString,
  filterFn_equalsStringSensitive,
  filterFn_inDateRange,
  filterFn_inNumberRange,
  filterFn_includesString,
  filterFn_includesStringSensitive,
  filterFn_notEmpty,
  filterFn_startsWith,
  filterFn_weakEquals,
  cellSelectionFeature,
  cellSpanningFeature,
  columnFacetingFeature,
  columnFilteringFeature,
  columnGroupingFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  globalFilteringFeature,
  rowAggregationFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowPinningFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_alphanumericCaseSensitive,
  sortFn_basic,
  sortFn_text,
  sortFn_textCaseSensitive,
  tableFeatures,
  tableOptions,
  createFacetedMinMaxValues,
  createFacetedUniqueValues,
} from '@tanstack/react-table';
import type { RowData } from '@tanstack/react-table';

import {
  aggregation_zoned_date_time_min,
  aggregation_zoned_date_time_max,
  aggregation_zoned_date_time_extent,
  aggregation_instant_min,
  aggregation_instant_max,
  aggregation_instant_extent,
  aggregation_plain_date_time_min,
  aggregation_plain_date_time_max,
  aggregation_plain_date_time_extent,
  aggregation_plain_date_min,
  aggregation_plain_date_max,
  aggregation_plain_date_extent,
  aggregation_plain_time_min,
  aggregation_plain_time_max,
  aggregation_plain_time_extent,
} from '#src/common/components/data-table/lib/aggregate-fns';
import {
  filter_zoned_date_time_equals,
  filter_zoned_date_time_not_equal,
  filter_zoned_date_time_greater_than,
  filter_zoned_date_time_greater_than_or_equal,
  filter_zoned_date_time_less_than,
  filter_zoned_date_time_less_than_or_equal,
  filter_zoned_date_time_range,
  filter_instant_equals,
  filter_instant_not_equal,
  filter_instant_greater_than,
  filter_instant_greater_than_or_equal,
  filter_instant_less_than,
  filter_instant_less_than_or_equal,
  filter_instant_range,
  filter_plain_date_time_equals,
  filter_plain_date_time_not_equal,
  filter_plain_date_time_greater_than,
  filter_plain_date_time_greater_than_or_equal,
  filter_plain_date_time_less_than,
  filter_plain_date_time_less_than_or_equal,
  filter_plain_date_time_range,
  filter_plain_date_equals,
  filter_plain_date_not_equal,
  filter_plain_date_greater_than,
  filter_plain_date_greater_than_or_equal,
  filter_plain_date_less_than,
  filter_plain_date_less_than_or_equal,
  filter_plain_date_range,
  filter_plain_time_equals,
  filter_plain_time_not_equal,
  filter_plain_time_greater_than,
  filter_plain_time_greater_than_or_equal,
  filter_plain_time_less_than,
  filter_plain_time_less_than_or_equal,
  filter_plain_time_range,
} from '#src/common/components/data-table/lib/filter-fns';
import {
  sort_zoned_date_time,
  sort_instant,
  sort_plain_date_time,
  sort_plain_date,
  sort_plain_time,
} from '#src/common/components/data-table/lib/sort-fns';

// export interface DataTableColumnTextMeta {
//   variant: 'text';
// }
//
// export interface DataTableColumnNumberMeta {
//   variant: 'number';
// }
//
// export interface DataTableColumnZonedDateTimeMeta {
//   variant: 'zonedDateTime';
// }
//
// export interface DataTableColumnInstantMeta {
//   variant: 'instant';
// }
//
// export interface DataTableColumnPlainDateTimeMeta {
//   variant: 'plainDateTime';
// }
//
// export interface DataTableColumnPlainDateMeta {
//   variant: 'plainDate';
// }
//
// export interface DataTableColumnPlainTimeMeta {
//   variant: 'plainTime';
// }
//
// export interface DataTableColumnSelectMeta {
//   variant: 'select';
//   options: { label: string; value: string }[];
// }
//
// export interface DataTableColumnMultiSelectMeta {
//   variant: 'multiSelect';
//   options: { label: string; value: string }[];
// }
//
// export type DataTableColumnMeta =
//   | DataTableColumnTextMeta
//   | DataTableColumnSelectMeta
//   | DataTableColumnMultiSelectMeta
//   | DataTableColumnNumberMeta
//   | DataTableColumnZonedDateTimeMeta
//   | DataTableColumnInstantMeta
//   | DataTableColumnPlainDateTimeMeta
//   | DataTableColumnPlainDateMeta
//   | DataTableColumnPlainTimeMeta;

export const dataTableFeatures = tableFeatures({
  // tableMeta: metaHelper<>(),
  // columnMeta: metaHelper<DataTableColumnMeta>(),
  // filterMeta: metaHelper<>(),

  // Auto included now - https://tanstack.com/table/latest/docs/guide/row-models
  // coreRowModel: createCoreRowModel(),

  globalFilteringFeature,
  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),

  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),

  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),

  rowExpandingFeature,
  expandedRowModel: createExpandedRowModel(),

  columnGroupingFeature,
  rowAggregationFeature,
  groupedRowModel: createGroupedRowModel(),

  columnFacetingFeature,
  facetedRowModel: createFacetedRowModel(),
  facetedMinMaxValues: createFacetedMinMaxValues(),
  facetedUniqueValues: createFacetedUniqueValues(),

  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,

  rowPinningFeature,
  rowSelectionFeature,

  cellSelectionFeature,
  cellSpanningFeature,

  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    alphanumericCaseSensitive: sortFn_alphanumericCaseSensitive,
    basic: sortFn_basic,
    text: sortFn_text,
    textCaseSensitive: sortFn_textCaseSensitive,
    zoned_date_time: sort_zoned_date_time,
    instant: sort_instant,
    plain_date_time: sort_plain_date_time,
    plain_date: sort_plain_date,
    plain_time: sort_plain_time,
  },
  filterFns: {
    arrIncludes: filterFn_arrIncludes,
    arrIncludesAll: filterFn_arrIncludesAll,
    arrHas: filterFn_arrHas,
    arrIncludesSome: filterFn_arrIncludesSome,
    between: filterFn_between,
    betweenInclusive: filterFn_betweenInclusive,
    empty: filterFn_empty,
    endsWith: filterFn_endsWith,
    equals: filterFn_equals,
    equalsString: filterFn_equalsString,
    equalsStringSensitive: filterFn_equalsStringSensitive,
    inDateRange: filterFn_inDateRange,
    inNumberRange: filterFn_inNumberRange,
    includesString: filterFn_includesString,
    includesStringSensitive: filterFn_includesStringSensitive,
    notEmpty: filterFn_notEmpty,
    startsWith: filterFn_startsWith,
    weakEquals: filterFn_weakEquals,
    zoned_date_time_equals: filter_zoned_date_time_equals,
    zoned_date_time_not_equal: filter_zoned_date_time_not_equal,
    zoned_date_time_greater_than: filter_zoned_date_time_greater_than,
    zoned_date_time_greater_than_or_equal: filter_zoned_date_time_greater_than_or_equal,
    zoned_date_time_less_than: filter_zoned_date_time_less_than,
    zoned_date_time_less_than_or_equal: filter_zoned_date_time_less_than_or_equal,
    zoned_date_time_range: filter_zoned_date_time_range,
    instant_equals: filter_instant_equals,
    instant_not_equal: filter_instant_not_equal,
    instant_greater_than: filter_instant_greater_than,
    instant_greater_than_or_equal: filter_instant_greater_than_or_equal,
    instant_less_than: filter_instant_less_than,
    instant_less_than_or_equal: filter_instant_less_than_or_equal,
    instant_range: filter_instant_range,
    plain_date_time_equals: filter_plain_date_time_equals,
    plain_date_time_not_equal: filter_plain_date_time_not_equal,
    plain_date_time_greater_than: filter_plain_date_time_greater_than,
    plain_date_time_greater_than_or_equal: filter_plain_date_time_greater_than_or_equal,
    plain_date_time_less_than: filter_plain_date_time_less_than,
    plain_date_time_less_than_or_equal: filter_plain_date_time_less_than_or_equal,
    plain_date_time_range: filter_plain_date_time_range,
    plain_date_equals: filter_plain_date_equals,
    plain_date_not_equal: filter_plain_date_not_equal,
    plain_date_greater_than: filter_plain_date_greater_than,
    plain_date_greater_than_or_equal: filter_plain_date_greater_than_or_equal,
    plain_date_less_than: filter_plain_date_less_than,
    plain_date_less_than_or_equal: filter_plain_date_less_than_or_equal,
    plain_date_range: filter_plain_date_range,
    plain_time_equals: filter_plain_time_equals,
    plain_time_not_equal: filter_plain_time_not_equal,
    plain_time_greater_than: filter_plain_time_greater_than,
    plain_time_greater_than_or_equal: filter_plain_time_greater_than_or_equal,
    plain_time_less_than: filter_plain_time_less_than,
    plain_time_less_than_or_equal: filter_plain_time_less_than_or_equal,
    plain_time_range: filter_plain_time_range,
  },
  aggregationFns: {
    sum: aggregationFn_sum,
    min: aggregationFn_min,
    max: aggregationFn_max,
    extent: aggregationFn_extent,
    mean: aggregationFn_mean,
    median: aggregationFn_median,
    unique: aggregationFn_unique,
    uniqueCount: aggregationFn_uniqueCount,
    first: aggregationFn_first,
    last: aggregationFn_last,
    zoned_date_time_min: aggregation_zoned_date_time_min,
    zoned_date_time_max: aggregation_zoned_date_time_max,
    zoned_date_time_extent: aggregation_zoned_date_time_extent,
    instant_min: aggregation_instant_min,
    instant_max: aggregation_instant_max,
    instant_extent: aggregation_instant_extent,
    plain_date_time_min: aggregation_plain_date_time_min,
    plain_date_time_max: aggregation_plain_date_time_max,
    plain_date_time_extent: aggregation_plain_date_time_extent,
    plain_date_min: aggregation_plain_date_min,
    plain_date_max: aggregation_plain_date_max,
    plain_date_extent: aggregation_plain_date_extent,
    plain_time_min: aggregation_plain_time_min,
    plain_time_max: aggregation_plain_time_max,
    plain_time_extent: aggregation_plain_time_extent,
  },
});

export type DataTableFeatures = typeof dataTableFeatures;

export const createFeaturedColumnHelper = <TData extends RowData>() => {
  return createColumnHelper<DataTableFeatures, TData>();
};

export const baseTableOptions = tableOptions({
  features: dataTableFeatures,
});

// export const paginationTableOptions = tableOptions({
//   initialState: {
//     pagination: {
//       pageIndex: 0,
//       pageSize: 10,
//     },
//   },
// });

// interface Person {
//   id: number;
//   name: string;
//   age: number;
//   gender: string;
//   phoneNumber: string;
// }
//
// const columnHelper = createFeaturedColumnHelper<Person>();
//
// const columns = columnHelper.columns([
//   columnHelper.accessor('name', {
//     sortFn: 'text',
//     filterFn: 'includesString',
//     meta: {
//       variant: 'text',
//     },
//   }),
// ]);
//
// export const createPaginationAtom = () => {
//   return createAtom<PaginationState>({
//     pageIndex: 0,
//     pageSize: 10,
//   });
// }
//
// export const createSortingAtom = () => {
//   return createAtom<SortingState>([]);
// }
//
// export const createColumnFiltersAtom = () => {
//   return createAtom<ColumnFiltersState>([]);
// }
//
// export const createColumnVisibilityAtom = () => {
//   return createAtom<ColumnVisibilityState>({
//     'created_at': false,
//     'updated_at': false,
//     'created_by': false,
//     'updated_by': false,
//   });
// }
//
// export const createRowPinningAtom = () => {
//   return createAtom<RowPinningState>({
//     top: [],
//     bottom: [],
//   });
// }
//
// export const createColumnPinningAtom = () => {
//   return createAtom<ColumnPinningState>({
//     start: [],
//     end: [],
//   });
// }
//
// const paginationAtom = createPaginationAtom();
// const sortingAtom = createSortingAtom();
// const columnFiltersAtom = createColumnFiltersAtom();
// const columnVisibilityAtom = createColumnVisibilityAtom();
// const rowPinningAtom = createRowPinningAtom();
// const columnPinningAtom = createColumnPinningAtom();
//
// export const useCreateTableTest = () => {
//   const table = useTable({
//     // ...baseTableOptions,
//     features: dataTableFeatures,
//     columns,
//     data: [],
//     atoms: {
//       pagination: paginationAtom,
//       sorting: sortingAtom,
//       columnFilters: columnFiltersAtom,
//       columnVisibility: columnVisibilityAtom,
//       rowPinning: rowPinningAtom,
//       columnPinning: columnPinningAtom,
//     },
//   });
//
//   return {
//     paginationAtom,
//     sortingAtom,
//     columnFiltersAtom,
//     columnVisibilityAtom,
//     rowPinningAtom,
//     columnPinningAtom,
//     table,
//   }
// }
