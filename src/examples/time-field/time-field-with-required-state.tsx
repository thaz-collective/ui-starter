import { useState } from 'react';

import { TimeField } from '#src/common/components/time-field';

export function TimeFieldWithRequiredStateExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <TimeField.LabelInputContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.LabelInputContainer>
    </TimeField>
  );
}
