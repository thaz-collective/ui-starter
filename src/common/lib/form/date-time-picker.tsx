import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { TemporalDateValue } from '@thaz/form-util/util';

import { DateTimePicker } from '#src/common/components/date-time-picker';

// The canonical form value is a `Temporal` date/date-time (`TemporalDateValue`) rather than a
// plain string/JS `Date`, avoiding a conversion layer until a project-wide representation is decided.
export function DateTimePickerAdapter<T extends TemporalDateValue>({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<T | null>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<ComponentPropsWithRef<typeof DateTimePicker<T>>, 'value' | 'onChange' | 'onBlur' | 'children'>) {
  return (
    <DateTimePicker.Root
      {...rootProps}
      value={field.value}
      onChange={(value) => {
        field.handleChange(value);
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
