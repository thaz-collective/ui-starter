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
  operator: FilterOperator | null;
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

const FILTER_OPERATOR_TYPES = new Set(STRING_FILTER_OPERATOR_TYPES);
const FILTER_OPERATOR_TYPE_LIST = [...FILTER_OPERATOR_TYPES];

export type FilterOperator = StringFilterOperator;

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

export type DataTableColumnMeta = DataTableColumnStringMeta;
