import { useState } from 'react';

import { Card } from '#src/common/components/card';
import { NumberField } from '#src/common/components/number-field';

export function NumberFieldInACardExample() {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Order details'}</Card.Title>
        <Card.Description>{'Adjust quantities before checkout.'}</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-5">
        <NumberField
          value={quantity}
          onChange={setQuantity}
          minValue={1}
        >
          <NumberField.LabelInputContainer>
            <NumberField.Label>{'Quantity'}</NumberField.Label>
            <NumberField.Group>
              <NumberField.Input placeholder="1" />
              <NumberField.StepButtons>
                <NumberField.IncrementButton />
                <NumberField.DecrementButton />
              </NumberField.StepButtons>
            </NumberField.Group>
          </NumberField.LabelInputContainer>
        </NumberField>
      </Card.Content>
    </Card>
  );
}
