import { useState } from 'react';

import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { StringFilterOperator } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import { TextField } from '#src/common/components/text-field';

import { useStringFilter } from './use-string-filter';

const EMPTY_OPERATORS = new Set<StringFilterOperator>(['isEmpty', 'isNotEmpty']);
const DEFAULT_DEBOUNCE_MS = 300;

interface FilterStringValueProps {
  filterID: string;
  label: string;
  debounceMs?: number;
}

export function FilterStringValue(props: FilterStringValueProps) {
  const { filterID, label, debounceMs = DEFAULT_DEBOUNCE_MS } = props;
  const { operator, value, updateValue } = useStringFilter(filterID);

  const [prevValue, setPrevValue] = useState(value);
  const [inputValue, setInputValue] = useState(value ?? '');

  if (prevValue !== value) {
    setPrevValue(value);
    setInputValue(value ?? '');
  }

  const debouncedUpdateValue = useDebouncedCallback(
    (nextValue: string) => {
      if (nextValue === '') {
        updateValue(null);
        return;
      }

      updateValue(nextValue);
    },
    { wait: debounceMs },
  );

  const isDisabled = operator !== null && EMPTY_OPERATORS.has(operator);

  return (
    <TextField
      value={inputValue}
      isDisabled={isDisabled}
      onChange={(nextValue) => {
        setInputValue(nextValue);
        debouncedUpdateValue(nextValue);
      }}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{label}</TextField.Label>
        <TextField.Input />
      </TextField.LabelInputContainer>
    </TextField>
  );
}
