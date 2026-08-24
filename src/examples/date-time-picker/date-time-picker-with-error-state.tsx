import { useState } from 'react';

import { DateTimePicker } from '#src/common/components/date-time-picker';

export function DateTimePickerWithErrorStateExample() {
  const [value, setValue] = useState<Temporal.PlainDate | null>(null);

  return (
    <DateTimePicker
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <DateTimePicker.LabelInputContainer>
        <DateTimePicker.Label>{'Event date'}</DateTimePicker.Label>
        <DateTimePicker.Group>
          <DateTimePicker.Input />
          <DateTimePicker.TriggerButton />
        </DateTimePicker.Group>
      </DateTimePicker.LabelInputContainer>
      <DateTimePicker.Popover>
        <DateTimePicker.Dialog>
          <DateTimePicker.Calendar />
        </DateTimePicker.Dialog>
      </DateTimePicker.Popover>
      <DateTimePicker.FieldError>{'Please choose a valid date.'}</DateTimePicker.FieldError>
    </DateTimePicker>
  );
}
