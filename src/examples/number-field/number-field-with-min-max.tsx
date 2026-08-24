import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldWithMinMaxExample() {
  const [value, setValue] = useState(50);

  return (
    <NumberField
      className="w-48"
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={100}
    >
      <NumberField.LabelInputContainer>
        <NumberField.Label>{'Percentage'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input placeholder="0" />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.LabelInputContainer>
      <NumberField.Description>{'Clamped between 0 and 100.'}</NumberField.Description>
    </NumberField>
  );
}
