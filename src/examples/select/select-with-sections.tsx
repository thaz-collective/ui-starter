import { useState } from 'react';

import type { Key } from 'react-aria-components';

import { Select } from '#src/common/components/select';

export function SelectWithSectionsExample() {
  const [value, setValue] = useState<Key | null>(null);

  return (
    <Select
      className="w-64"
      placeholder="Select a food"
      value={value}
      onChange={setValue}
    >
      <Select.TriggerGroup>
        <Select.LabelValueContainer>
          <Select.Label>{'Favorite food'}</Select.Label>
          <Select.Value />
        </Select.LabelValueContainer>
        <Select.ClearButton />
        <Select.TriggerButton>
          <Select.Chevron />
        </Select.TriggerButton>
      </Select.TriggerGroup>
      <Select.Popover>
        <Select.ListBox>
          <Select.Section>
            <Select.Header>{'Fruits'}</Select.Header>
            <Select.Item id="apple">{'Apple'}</Select.Item>
            <Select.Item id="banana">{'Banana'}</Select.Item>
          </Select.Section>
          <Select.Section>
            <Select.Header>{'Vegetables'}</Select.Header>
            <Select.Item id="carrot">{'Carrot'}</Select.Item>
            <Select.Item id="broccoli">{'Broccoli'}</Select.Item>
          </Select.Section>
        </Select.ListBox>
      </Select.Popover>
    </Select>
  );
}
