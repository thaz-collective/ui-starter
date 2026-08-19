import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { Key } from 'react-aria-components';

import type { SelectProps } from '#src/common/components/select';
import { Select } from '#src/common/components/select';

// The canonical form value is the selection `Key` itself (matches RAC's own controlled-value shape),
// not the full option object — avoids depending on the option list being loaded synchronously.
export function SelectAdapter<T extends object>({
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
} & Omit<SelectProps<T>, 'selectedKey' | 'onSelectionChange' | 'onBlur' | 'children'>) {
  return (
    <Select.Root
      {...rootProps}
      // `selectedKey`/`onSelectionChange` are RAC's classic single-selection API; this library
      // targets that shape until it migrates to the newer selection API.
      // oxlint-disable-next-line no-deprecated
      selectedKey={field.value}
      // oxlint-disable-next-line no-deprecated
      onSelectionChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <Select.Label>{label}</Select.Label>}
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Popover>
        <Select.ListBox items={items}>{children}</Select.ListBox>
      </Select.Popover>
      {description && <Select.Description>{description}</Select.Description>}
      <Select.FieldError>{field.errors.map((error) => error.message).join(', ')}</Select.FieldError>
    </Select.Root>
  );
}
