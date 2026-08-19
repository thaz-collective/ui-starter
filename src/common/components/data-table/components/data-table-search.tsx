import { useState } from 'react';

import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import type { InputProps } from 'react-aria-components';
import { Input, TextField } from 'react-aria-components';

import { dataTableVariants } from '#src/common/components/data-table/variants';

export interface DataTableSearchProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

// Global-filter search input, debounced via `@tanstack/react-pacer` (already a
// dependency in this repo — reused rather than adding another debounce utility,
// per the integration plan's note). Kept uncontrolled internally so keystrokes
// aren't throttled visually, only the `onChange` callback (and therefore
// `table`'s `globalFilter` state) is debounced.
export function DataTableSearch(props: DataTableSearchProps) {
  const { value, onChange, debounceMs = 300, className, ...rest } = props;
  const { search } = dataTableVariants();

  const [localValue, setLocalValue] = useState(value);
  const debouncedOnChange = useDebouncedCallback(onChange, { wait: debounceMs });

  return (
    <TextField
      aria-label="Search"
      value={localValue}
      onChange={(nextValue) => {
        setLocalValue(nextValue);
        debouncedOnChange(nextValue);
      }}
      className={search()}
    >
      <Input
        {...rest}
        className={className ?? ''}
        placeholder={props.placeholder ?? 'Search...'}
      />
    </TextField>
  );
}
