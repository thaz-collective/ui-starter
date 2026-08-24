import { useState } from 'react';

import { DateTimePicker } from '#src/common/components/date-time-picker';

export function DateTimePickerWithGranularityExample() {
  const [value, setValue] = useState<Temporal.PlainDateTime | null>(null);

  return (
    <DateTimePicker
      className="w-72"
      granularity="minute"
      value={value}
      onChange={setValue}
    >
      <DateTimePicker.LabelInputContainer>
        <DateTimePicker.Label>{'Appointment'}</DateTimePicker.Label>
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
      <DateTimePicker.Description>{'Includes hours and minutes.'}</DateTimePicker.Description>
    </DateTimePicker>
  );
}
