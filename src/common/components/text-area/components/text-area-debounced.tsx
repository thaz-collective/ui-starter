import type { ChangeEvent, ComponentProps } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import { TextArea } from './text-area';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type StringDebouncerOptions = DebouncerOptions<(value: string) => void>;

export interface TextAreaDebouncedProps extends Omit<
  ComponentProps<typeof TextArea>,
  'defaultValue' | 'value' | 'onChange'
> {
  value: string;
  onChange: (value: string) => void;
  debounceOptions?: Partial<StringDebouncerOptions>;
}

export function TextAreaDebounced(props: TextAreaDebouncedProps) {
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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
    setInputValue(nextValue);
    debouncedUpdateValue(nextValue);
  };

  return (
    <TextArea
      {...props}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
