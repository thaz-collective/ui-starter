import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { SearchFieldProps } from '#src/common/components/search-field';
import { SearchField } from '#src/common/components/search-field';

export function SearchFieldAdapter({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<string>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<SearchFieldProps, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <SearchField.Root
      {...rootProps}
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <SearchField.Label>{label}</SearchField.Label>}
      <SearchField.Group>
        <SearchField.Input />
        <SearchField.ClearButton />
      </SearchField.Group>
      {description && <SearchField.Description>{description}</SearchField.Description>}
      <SearchField.FieldError>{field.errors.map((error) => error.message).join(', ')}</SearchField.FieldError>
    </SearchField.Root>
  );
}
