import type { ComponentPropsWithRef } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { TemporalDateValue } from '@thaz/form-util/util';

import { DateTimePickerRoot } from './date-time-picker-root';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type DateTimePickerRootProps<T extends TemporalDateValue> = ComponentPropsWithRef<typeof DateTimePickerRoot<T>>;

type DateTimePickerDebouncerOptions<T extends TemporalDateValue> = DebouncerOptions<
  NonNullable<DateTimePickerRootProps<T>['onChange']>
>;

interface DateTimePickerRootDebouncedProps<T extends TemporalDateValue> extends DateTimePickerRootProps<T> {
  debounceOptions?: Partial<DateTimePickerDebouncerOptions<T>>;
}

export function DateTimePickerRootDebounced<T extends TemporalDateValue>(props: DateTimePickerRootDebouncedProps<T>) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: DateTimePickerDebouncerOptions<T> = {
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
    <DateTimePickerRoot
      {...props}
      value={inputValue}
      onChange={(nextValue) => {
        setInputValue(nextValue);
        debouncedUpdateValue(nextValue);
      }}
    />
  );
}
