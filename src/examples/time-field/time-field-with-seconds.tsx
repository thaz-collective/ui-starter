import { useState } from 'react';

import { TimeField } from '#src/common/components/time-field';

export function TimeFieldWithSecondsExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      granularity="second"
      value={value}
      onChange={setValue}
    >
      <TimeField.LabelInputContainer>
        <TimeField.Label>{'Lap time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.LabelInputContainer>
      <TimeField.Description>{'Includes seconds.'}</TimeField.Description>
    </TimeField>
  );
}
