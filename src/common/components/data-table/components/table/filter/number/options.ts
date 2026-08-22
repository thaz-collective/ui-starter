import type { NumberFilterOperator } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

export interface NumberFilterOperatorOption {
  operator: NumberFilterOperator;
  label: string;
}

export const DEFAULT_NUMBER_FILTER_OPERATOR_OPTION_LIST: NumberFilterOperatorOption[] = [
  { operator: 'equals', label: 'Equals' },
  { operator: 'notEquals', label: 'Does not equal' },
  { operator: 'greaterThan', label: 'Greater than' },
  { operator: 'greaterThanOrEqual', label: 'Greater than or equal to' },
  { operator: 'lessThan', label: 'Less than' },
  { operator: 'lessThanOrEqual', label: 'Less than or equal to' },
  { operator: 'range', label: 'Range' },
];
