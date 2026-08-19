import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { RadioGroupProps } from '#src/common/components/radio-group';
import { RadioGroup } from '#src/common/components/radio-group';

export function RadioGroupAdapter({
  field,
  label,
  description,
  children,
  ...rootProps
}: {
  field: FieldWithValue<string>;
  label?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
} & Omit<RadioGroupProps, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <RadioGroup.Root
      {...rootProps}
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <RadioGroup.Label>{label}</RadioGroup.Label>}
      {children}
      {description && <RadioGroup.Description>{description}</RadioGroup.Description>}
      <RadioGroup.FieldError>{field.errors.map((error) => error.message).join(', ')}</RadioGroup.FieldError>
    </RadioGroup.Root>
  );
}
