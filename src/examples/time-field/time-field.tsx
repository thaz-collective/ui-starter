import { useState } from 'react';

import { TimeField } from '#src/common/components/time-field';

export function TimeFieldExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
    >
      <TimeField.LabelInputContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.LabelInputContainer>
      <TimeField.Description>{'Choose a start time.'}</TimeField.Description>
    </TimeField>
  );
}
