import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import { TextField } from '#src/common/components/text-field';

export function TextFieldAdapter({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<string>;
  label: ReactNode;
  description?: ReactNode;
} & Omit<ComponentPropsWithRef<typeof TextField>, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <TextField.Root
      {...rootProps}
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <TextField.Label>{label}</TextField.Label>}
      <TextField.Input />
      {description && <TextField.Description>{description}</TextField.Description>}
      <TextField.FieldError>{field.errors.map((error) => error.message).join(', ')}</TextField.FieldError>
    </TextField.Root>
  );
}
