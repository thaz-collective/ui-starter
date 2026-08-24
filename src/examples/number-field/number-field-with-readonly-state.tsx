import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldWithReadonlyStateExample() {
  const [value, setValue] = useState(42);

  return (
    <NumberField
      className="w-48"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <NumberField.LabelInputContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.LabelInputContainer>
    </NumberField>
  );
}
