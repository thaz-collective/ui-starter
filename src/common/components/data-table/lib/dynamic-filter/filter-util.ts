import type { ColumnFilter } from '@tanstack/react-table';

export const JOIN_OPERATOR_TYPES = ['and', 'or'] as const;

export type JoinOperator = (typeof JOIN_OPERATOR_TYPES)[number];

export interface BaseDynamicColumnFilter extends ColumnFilter {
  filterID: string;
  joinOperator: JoinOperator;
}

export const STRING_FILTER_OPERATOR_TYPES = [
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'startsWith',
  'endsWith',
  'isEmpty',
  'isNotEmpty',
] as const;

export type StringFilterOperator = (typeof STRING_FILTER_OPERATOR_TYPES)[number];

export interface StringColumnFilter extends BaseDynamicColumnFilter {
  operator: StringFilterOperator | null;
  value: string | null;
}

export function isStringColumnFilter(value: unknown): value is StringColumnFilter {
  return (
    value !== null &&
    value !== undefined &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string' &&
    'filterID' in value &&
    typeof value.filterID === 'string' &&
    'joinOperator' in value &&
    typeof value.joinOperator === 'string' &&
    JOIN_OPERATOR_TYPES.some((joinOperator) => joinOperator === value.joinOperator) &&
    'operator' in value &&
    (value.operator === null ||
      (typeof value.operator === 'string' &&
        STRING_FILTER_OPERATOR_TYPES.some((operator) => operator === value.operator))) &&
    'value' in value &&
    (typeof value.value === 'string' || value.value === null)
  );
}

export interface DataTableColumnStringMeta {
  variant: 'string';
  label: string;
}

export const NUMBER_FILTER_OPERATOR_TYPES = [
  'equals',
  'notEquals',
  'greaterThan',
  'greaterThanOrEqual',
  'lessThan',
  'lessThanOrEqual',
  'range',
] as const;

export type NumberFilterOperator = (typeof NUMBER_FILTER_OPERATOR_TYPES)[number];

export interface NumberFilterValue {
  min: number | null;
  max: number | null;
}

export interface NumberColumnFilter extends BaseDynamicColumnFilter {
  operator: NumberFilterOperator | null;
  value: NumberFilterValue | null;
}

function isNumberFilterValue(value: unknown): value is NumberFilterValue {
  return (
    value !== null &&
    typeof value === 'object' &&
    'min' in value &&
    (typeof value.min === 'number' || value.min === null) &&
    'max' in value &&
    (typeof value.max === 'number' || value.max === null)
  );
}

export function isNumberColumnFilter(value: unknown): value is NumberColumnFilter {
  return (
    value !== null &&
    value !== undefined &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string' &&
    'filterID' in value &&
    typeof value.filterID === 'string' &&
    'joinOperator' in value &&
    typeof value.joinOperator === 'string' &&
    JOIN_OPERATOR_TYPES.some((joinOperator) => joinOperator === value.joinOperator) &&
    'operator' in value &&
    (value.operator === null ||
      (typeof value.operator === 'string' &&
        NUMBER_FILTER_OPERATOR_TYPES.some((operator) => operator === value.operator))) &&
    'value' in value &&
    (value.value === null || isNumberFilterValue(value.value))
  );
}

export interface DataTableColumnNumberMeta {
  variant: 'number';
  label: string;
}

const FILTER_OPERATOR_TYPES = new Set([...STRING_FILTER_OPERATOR_TYPES, ...NUMBER_FILTER_OPERATOR_TYPES]);
const FILTER_OPERATOR_TYPE_LIST = [...FILTER_OPERATOR_TYPES];

export type FilterOperator = StringFilterOperator | NumberFilterOperator;

export interface DynamicColumnFilter extends BaseDynamicColumnFilter {
  operator: FilterOperator | null;
}

export function isDynamicColumnFilter(value: unknown): value is DynamicColumnFilter {
  return (
    value !== null &&
    value !== undefined &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string' &&
    'filterID' in value &&
    typeof value.filterID === 'string' &&
    'joinOperator' in value &&
    typeof value.joinOperator === 'string' &&
    JOIN_OPERATOR_TYPES.some((joinOperator) => joinOperator === value.joinOperator) &&
    'operator' in value &&
    (value.operator === null ||
      (typeof value.operator === 'string' &&
        FILTER_OPERATOR_TYPE_LIST.some((operator) => operator === value.operator))) &&
    'value' in value
  );
}

export type DataTableColumnMeta = DataTableColumnStringMeta | DataTableColumnNumberMeta;
