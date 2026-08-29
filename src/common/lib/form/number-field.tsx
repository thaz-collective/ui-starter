import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldAdapter({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<number>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<ComponentPropsWithRef<typeof NumberField>, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <NumberField.Root
      {...rootProps}
      value={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <NumberField.Label>{label}</NumberField.Label>}
      <NumberField.Group>
        <NumberField.Input />
        <NumberField.StepButtons>
          <NumberField.IncrementButton />
          <NumberField.DecrementButton />
        </NumberField.StepButtons>
      </NumberField.Group>
      {description && <NumberField.Description>{description}</NumberField.Description>}
      <NumberField.FieldError>{field.errors.map((error) => error.message).join(', ')}</NumberField.FieldError>
    </NumberField.Root>
  );
}
