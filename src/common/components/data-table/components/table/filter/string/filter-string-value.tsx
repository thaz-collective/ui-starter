import { Input } from 'react-aria-components';

import type { StringFilterOperator } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

import { useStringFilter } from './use-string-filter';
import { stringFilterVariants } from './variants';

const EMPTY_OPERATORS = new Set<StringFilterOperator>(['isEmpty', 'isNotEmpty']);

interface FilterStringValueProps {
  filterID: string;
  label: string;
}

export function FilterStringValue(props: FilterStringValueProps) {
  const { filterID, label } = props;
  const { operator, value, updateValue } = useStringFilter(filterID);

  const { valueInput } = stringFilterVariants();

  const isDisabled = operator !== null && EMPTY_OPERATORS.has(operator);

  return (
    <Input
      aria-label={`${label} filter value`}
      className={valueInput()}
      value={value ?? ''}
      disabled={isDisabled}
      onChange={(event) => {
        const { value: nextValue } = event.target;

        if (nextValue === '') {
          updateValue(null);
          return;
        }

        updateValue(nextValue);
      }}
    />
  );
}
