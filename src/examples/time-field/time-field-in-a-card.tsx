import { useState } from 'react';

import { Card } from '#src/common/components/card';
import { TimeField } from '#src/common/components/time-field';

export function TimeFieldInACardExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Schedule a call'}</Card.Title>
        <Card.Description>{'Pick a time that works for you.'}</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-5">
        <TimeField
          value={value}
          onChange={setValue}
        >
          <TimeField.LabelInputContainer>
            <TimeField.Label>{'Time'}</TimeField.Label>
            <TimeField.Input />
          </TimeField.LabelInputContainer>
        </TimeField>
      </Card.Content>
    </Card>
  );
}
