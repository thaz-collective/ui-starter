import type { ReactNode } from 'react';
import { useState } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { Key } from 'react-aria-components';

import type { ComboBoxProps } from '#src/common/components/combo-box';
import { ComboBox } from '#src/common/components/combo-box';

// Like select, the form's canonical value is the selection `Key`. `inputValue` (the raw typed text,
// which may not match the selected option's label) is transient UI state, not form data, so it's
// managed locally rather than through the field.
export function ComboBoxAdapter<T extends object>({
  field,
  label,
  description,
  items,
  children,
  ...rootProps
}: {
  field: FieldWithValue<Key | null>;
  label?: ReactNode;
  description?: ReactNode;
  items: Iterable<T>;
  children: (item: T) => ReactNode;
} & Omit<
  ComboBoxProps<T>,
  'selectedKey' | 'onSelectionChange' | 'inputValue' | 'onInputChange' | 'onBlur' | 'children'
>) {
  const [inputValue, setInputValue] = useState('');

  return (
    <ComboBox.Root
      {...rootProps}
      // Same classic single-selection API as the select adapter.
      // oxlint-disable-next-line no-deprecated
      selectedKey={field.value}
      // oxlint-disable-next-line no-deprecated
      onSelectionChange={field.handleChange}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <ComboBox.Label>{label}</ComboBox.Label>}
      <ComboBox.Group>
        <ComboBox.Input />
        <ComboBox.TriggerButton />
      </ComboBox.Group>
      <ComboBox.Popover>
        <ComboBox.ListBox items={items}>{children}</ComboBox.ListBox>
      </ComboBox.Popover>
      {description && <ComboBox.Description>{description}</ComboBox.Description>}
      <ComboBox.FieldError>{field.errors.map((error) => error.message).join(', ')}</ComboBox.FieldError>
    </ComboBox.Root>
  );
}
