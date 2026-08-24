import { useState } from 'react';

import { DateTimePicker } from '#src/common/components/date-time-picker';

export function DateTimePickerWithDefaultValueExample() {
  const [value, setValue] = useState<Temporal.PlainDate | null>(
    Temporal.PlainDate.from({ year: 2026, month: 7, day: 17 }),
  );

  return (
    <DateTimePicker
      className="w-64"
      value={value}
      onChange={setValue}
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
    </DateTimePicker>
  );
}
