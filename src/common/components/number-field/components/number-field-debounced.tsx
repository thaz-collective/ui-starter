import type { ComponentProps } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import { NumberField } from './number-field';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type NumberDebouncerOptions = DebouncerOptions<(value: number) => void>;

export interface NumberFieldRootDebouncedProps extends Omit<ComponentProps<typeof NumberField>, 'defaultValue'> {
  value: number;
  onChange: (value: number) => void;
  debounceOptions?: Partial<NumberDebouncerOptions>;
}

export function NumberFieldRootDebounced(props: NumberFieldRootDebouncedProps) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: NumberDebouncerOptions = {
    ...debounceOptions,
    wait: debounceOptions?.wait ?? DEFAULT_DEBOUNCE_WAIT_MS,
  };

  const [prevValue, setPrevValue] = useState(value);
  const [inputValue, setInputValue] = useState(value);

  if (prevValue !== value) {
    setPrevValue(value);
    setInputValue(value);
  }

  const debouncedUpdateValue = useDebouncedCallback(onChange, debounceOptionsFinal);

  const handleChange = (nextValue: number) => {
    setInputValue(nextValue);
    debouncedUpdateValue(nextValue);
  };

  return (
    <NumberField
      {...props}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
