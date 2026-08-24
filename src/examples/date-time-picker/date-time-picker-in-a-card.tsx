import { useState } from 'react';

import { Card } from '#src/common/components/card';
import { DateTimePicker } from '#src/common/components/date-time-picker';

export function DateTimePickerInACardExample() {
  const [checkIn, setCheckIn] = useState<Temporal.PlainDate | null>(null);

  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Book a room'}</Card.Title>
        <Card.Description>{'Select a check-in date.'}</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-5">
        <DateTimePicker
          value={checkIn}
          onChange={setCheckIn}
        >
          <DateTimePicker.LabelInputContainer>
            <DateTimePicker.Label>{'Check-in'}</DateTimePicker.Label>
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
      </Card.Content>
    </Card>
  );
}
