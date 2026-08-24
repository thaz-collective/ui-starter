import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldExample() {
  const [quantity, setQuantity] = useState(Number.NaN);

  return (
    <NumberField
      className="w-48"
      value={quantity}
      onChange={setQuantity}
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
      <NumberField.Description>{'Number of items to order.'}</NumberField.Description>
    </NumberField>
  );
}
