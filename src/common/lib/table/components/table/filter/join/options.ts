import type { JoinOperator } from '#src/common/lib/table/lib/dynamic-filter/filter-util';

export interface JoinOperatorOption {
  operator: JoinOperator;
  label: string;
}

export const DEFAULT_JOIN_OPERATOR_OPTION_LIST: JoinOperatorOption[] = [
  { operator: 'and', label: 'And' },
  { operator: 'or', label: 'Or' },
];
