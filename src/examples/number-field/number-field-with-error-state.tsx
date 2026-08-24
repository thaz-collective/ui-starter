import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldWithErrorStateExample() {
  const [value, setValue] = useState(-1);

  return (
    <NumberField
      className="w-48"
      value={value}
      onChange={setValue}
      isInvalid={true}
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
      <NumberField.FieldError>{'Value must be 0 or greater.'}</NumberField.FieldError>
    </NumberField>
  );
}
