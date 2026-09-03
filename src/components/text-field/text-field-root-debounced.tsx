import type { ComponentPropsWithRef } from 'react';
import { useState } from 'react';

import type { DebouncerOptions } from '@tanstack/react-pacer/debouncer';
import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { SetRequired } from 'type-fest';

import { TextFieldRoot } from './text-field-root';

const DEFAULT_DEBOUNCE_WAIT_MS = 300;

type TextFieldRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof TextFieldRoot>, 'defaultValue'>,
  'value' | 'onChange'
>;

type TextFieldRootDebouncerOptions = DebouncerOptions<NonNullable<TextFieldRootProps['onChange']>>;

interface TextFieldRootDebouncedProps extends TextFieldRootProps {
  debounceOptions?: Partial<TextFieldRootDebouncerOptions>;
}

export function TextFieldRootDebounced(props: TextFieldRootDebouncedProps) {
  const { value, onChange, debounceOptions } = props;

  const debounceOptionsFinal: TextFieldRootDebouncerOptions = {
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
    <TextFieldRoot
      {...props}
      value={inputValue}
      onChange={(nextValue) => {
        setInputValue(nextValue);
        debouncedUpdateValue(nextValue);
      }}
    />
  );
}
