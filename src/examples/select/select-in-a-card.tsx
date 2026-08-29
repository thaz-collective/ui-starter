import { useState } from 'react';

import type { Key } from 'react-aria-components';

import { Card } from '#src/common/components/card';
import { Select } from '#src/common/components/select';

export function SelectInACardExample() {
  const [value, setValue] = useState<Key | null>(null);

  return (
    <Card
      variant="default"
      className="w-72"
    >
      <Card.Header>
        <Card.Title>{'Shipping'}</Card.Title>
        <Card.Description>{'Choose a delivery method.'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <Select
          placeholder="Select a method"
          value={value}
          onChange={setValue}
        >
          <Select.TriggerGroup>
            <Select.LabelValueContainer>
              <Select.Label>{'Delivery method'}</Select.Label>
              <Select.Value />
            </Select.LabelValueContainer>
            <Select.ClearButton />
            <Select.TriggerButton>
              <Select.Chevron />
            </Select.TriggerButton>
          </Select.TriggerGroup>
          <Select.Popover>
            <Select.ListBox>
              <Select.Item id="standard">{'Standard (5-7 days)'}</Select.Item>
              <Select.Item id="express">{'Express (2-3 days)'}</Select.Item>
              <Select.Item id="overnight">{'Overnight'}</Select.Item>
            </Select.ListBox>
          </Select.Popover>
        </Select>
      </Card.Content>
    </Card>
  );
}
