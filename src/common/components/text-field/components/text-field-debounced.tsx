import type { ComponentProps } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import { TextField } from './text-field';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type StringDebouncerOptions = DebouncerOptions<(value: string) => void>;

export interface TextFieldRootDebouncedProps extends Omit<ComponentProps<typeof TextField>, 'defaultValue'> {
  value: string;
  onChange: (value: string) => void;
  debounceOptions?: Partial<StringDebouncerOptions>;
}

export function TextFieldRootDebounced(props: TextFieldRootDebouncedProps) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: StringDebouncerOptions = {
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

  const handleChange = (nextValue: string) => {
    setInputValue(nextValue);
    debouncedUpdateValue(nextValue);
  };

  return (
    <TextField
      {...props}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
