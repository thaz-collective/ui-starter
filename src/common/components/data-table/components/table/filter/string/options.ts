import type { StringFilterOperator } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

export interface StringFilterOperatorOption {
  operator: StringFilterOperator;
  label: string;
}

export const DEFAULT_STRING_FILTER_OPERATOR_OPTION_LIST: StringFilterOperatorOption[] = [
  { operator: 'equals', label: 'Equals' },
  { operator: 'notEquals', label: 'Does not equal' },
  { operator: 'contains', label: 'Contains' },
  { operator: 'notContains', label: 'Does not contain' },
  { operator: 'startsWith', label: 'Starts with' },
  { operator: 'endsWith', label: 'Ends with' },
  { operator: 'isEmpty', label: 'Is empty' },
  { operator: 'isNotEmpty', label: 'Is not empty' },
];
