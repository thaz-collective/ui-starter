import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { TimeValue } from 'react-aria-components';

import type { TimeFieldProps } from '#src/common/components/time-field';
import { TimeField } from '#src/common/components/time-field';

// Same canonical-value-type choice as the date-time-picker adapter: the form's value is RAC's own
// `Time`-family `TimeValue`, pending a project-wide decision on a plain-value representation.
export function TimeFieldAdapter<T extends TimeValue>({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<T | null>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<TimeFieldProps<T>, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <TimeField.Root
      {...rootProps}
      value={field.value}
      onChange={(value) => {
        // Same rationale as the date-time-picker adapter's cast: `MappedTimeValue<T>` and `T` are the
        // same runtime value for every concrete `TimeValue` member; TS can't prove it through generic `T`.
        // oxlint-disable-next-line no-unsafe-type-assertion, consistent-type-assertions
        field.handleChange(value as T | null);
      }}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <TimeField.Label>{label}</TimeField.Label>}
      <TimeField.Input />
      {description && <TimeField.Description>{description}</TimeField.Description>}
      <TimeField.FieldError>{field.errors.map((error) => error.message).join(', ')}</TimeField.FieldError>
    </TimeField.Root>
  );
}
