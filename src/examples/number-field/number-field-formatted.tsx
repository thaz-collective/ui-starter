import { useState } from 'react';

import { NumberField } from '#src/common/components/number-field';

export function NumberFieldFormattedExample() {
  const [price, setPrice] = useState(Number.NaN);

  return (
    <NumberField
      className="w-48"
      value={price}
      onChange={setPrice}
      formatOptions={{ style: 'currency', currency: 'USD' }}
    >
      <NumberField.LabelInputContainer>
        <NumberField.Label>{'Price'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input placeholder="0.00" />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.LabelInputContainer>
      <NumberField.Description>{'Formatted as USD currency.'}</NumberField.Description>
    </NumberField>
  );
}
