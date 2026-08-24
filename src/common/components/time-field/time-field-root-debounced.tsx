import type { ComponentPropsWithRef } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { TemporalTimeValue } from '@thaz/form-util/util';

import { TimeFieldRoot } from './time-field-root';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type TimeFieldRootProps<T extends TemporalTimeValue> = ComponentPropsWithRef<typeof TimeFieldRoot<T>>;

type TimeFieldRootOnChange<T extends TemporalTimeValue> = NonNullable<TimeFieldRootProps<T>['onChange']>;

type TimeFieldRootDebouncerOptions<T extends TemporalTimeValue> = DebouncerOptions<TimeFieldRootOnChange<T>>;

interface TimeFieldRootDebouncedProps<T extends TemporalTimeValue> extends TimeFieldRootProps<T> {
  debounceOptions?: Partial<TimeFieldRootDebouncerOptions<T>>;
}

export function TimeFieldRootDebounced<T extends TemporalTimeValue>(props: TimeFieldRootDebouncedProps<T>) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: TimeFieldRootDebouncerOptions<T> = {
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

  return (
    <TimeFieldRoot
      {...props}
      value={inputValue}
      onChange={(nextValue) => {
        setInputValue(nextValue);
        debouncedUpdateValue(nextValue);
      }}
    />
  );
}
