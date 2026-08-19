import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { DateValue } from 'react-aria-components';

import type { DateTimePickerProps } from '#src/common/components/date-time-picker';
import { DateTimePicker } from '#src/common/components/date-time-picker';

// The canonical form value is RAC's own `DateValue` (from `@internationalized/date`) rather than a
// plain string/JS `Date`, avoiding a conversion layer until a project-wide representation is decided.
export function DateTimePickerAdapter<T extends DateValue>({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<T | null>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<DateTimePickerProps<T>, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <DateTimePicker.Root
      {...rootProps}
      value={field.value}
      onChange={(value) => {
        // `MappedDateValue<T>` and `T` are the same runtime value for every concrete `DateValue`
        // member; TS just can't prove it through a generic `T`, so the cast is safe.
        // oxlint-disable-next-line no-unsafe-type-assertion, consistent-type-assertions
        field.handleChange(value as T | null);
      }}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    >
      {label && <DateTimePicker.Label>{label}</DateTimePicker.Label>}
      <DateTimePicker.Group>
        <DateTimePicker.Input />
        <DateTimePicker.TriggerButton />
      </DateTimePicker.Group>
      {description && <DateTimePicker.Description>{description}</DateTimePicker.Description>}
      <DateTimePicker.FieldError>{field.errors.map((error) => error.message).join(', ')}</DateTimePicker.FieldError>
      <DateTimePicker.Popover>
        <DateTimePicker.Dialog>
          <DateTimePicker.Calendar />
        </DateTimePicker.Dialog>
      </DateTimePicker.Popover>
    </DateTimePicker.Root>
  );
}
