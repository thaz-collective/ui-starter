import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldWithRequiredStateExample() {
  const [quantity, setQuantity] = useState(1);

  return (
    <NumberField
      className="w-48"
      value={quantity}
      onChange={setQuantity}
      isRequired={true}
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
