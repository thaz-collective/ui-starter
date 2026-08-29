import { useState } from 'react';

import type { Key } from 'react-aria-components';

import { Select } from '#src/common/components/select';

export function SelectExample() {
  const [value, setValue] = useState<Key | null>(null);

  return (
    <Select
      className="w-64"
      placeholder="Select a fruit"
      value={value}
      onChange={setValue}
    >
      <Select.TriggerGroup>
        <Select.LabelValueContainer>
          <Select.Label>{'Favorite fruit'}</Select.Label>
          <Select.Value />
        </Select.LabelValueContainer>
        <Select.ClearButton />
        <Select.TriggerButton>
          <Select.Chevron />
        </Select.TriggerButton>
      </Select.TriggerGroup>
      <Select.Description>{'Choose your preferred fruit.'}</Select.Description>
      <Select.Popover>
        <Select.ListBox>
          <Select.Item id="apple">{'Apple'}</Select.Item>
          <Select.Item id="banana">{'Banana'}</Select.Item>
          <Select.Item id="cherry">{'Cherry'}</Select.Item>
          <Select.Item id="grape">{'Grape'}</Select.Item>
        </Select.ListBox>
      </Select.Popover>
    </Select>
  );
}
