import { useState } from 'react';

import { TimeField } from '#src/common/components/time-field';

export function TimeFieldWithDisabledStateExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(Temporal.PlainTime.from({ hour: 14, minute: 30 }));

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <TimeField.LabelInputContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.LabelInputContainer>
      <TimeField.Description>{'This field is disabled.'}</TimeField.Description>
    </TimeField>
  );
}
