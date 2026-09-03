import type { ComponentPropsWithRef } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { SetRequired } from 'type-fest';

import { NumberFieldRoot } from './number-field-root';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type NumberFieldRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof NumberFieldRoot>, 'defaultValue'>,
  'value' | 'onChange'
>;

type NumberFieldRootDebouncerOptions = DebouncerOptions<NonNullable<NumberFieldRootProps['onChange']>>;

interface NumberFieldRootDebouncedProps extends NumberFieldRootProps {
  debounceOptions?: Partial<NumberFieldRootDebouncerOptions>;
}

export function NumberFieldRootDebounced(props: NumberFieldRootDebouncedProps) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: NumberFieldRootDebouncerOptions = {
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
    <NumberFieldRoot
      {...props}
      value={inputValue}
      onChange={(nextValue) => {
        setInputValue(nextValue);
        debouncedUpdateValue(nextValue);
      }}
    />
  );
}
