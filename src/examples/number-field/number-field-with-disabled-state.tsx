import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldWithDisabledStateExample() {
  const [value, setValue] = useState(10);

  return (
    <NumberField
      className="w-48"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <NumberField.LabelInputContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input placeholder="0" />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.LabelInputContainer>
    </NumberField>
  );
}
