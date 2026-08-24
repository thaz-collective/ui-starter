import { useState } from 'react';

import { DateTimePicker } from '#src/common/components/date-time-picker';

export function DateTimePickerWithReadonlyStateExample() {
  const [value, setValue] = useState<Temporal.PlainDate | null>(
    Temporal.PlainDate.from({ year: 2026, month: 7, day: 17 }),
  );

  return (
    <DateTimePicker
      className="w-64"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <DateTimePicker.LabelInputContainer>
        <DateTimePicker.Label>{'Event date'}</DateTimePicker.Label>
        <DateTimePicker.Group>
          <DateTimePicker.Input />
          <DateTimePicker.TriggerButton />
        </DateTimePicker.Group>
      </DateTimePicker.LabelInputContainer>
    </DateTimePicker>
  );
}
