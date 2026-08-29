import { useState } from 'react';

import type { Key } from 'react-aria-components';

import { Select } from '#src/common/components/select';

export function SelectWithMultipleSelectionExample() {
  const [value, setValue] = useState<Key[]>([]);

  return (
    <Select
      className="w-64"
      selectionMode="multiple"
      placeholder="Select fruits"
      value={value}
      onChange={setValue}
    >
      <Select.TriggerGroup>
        <Select.LabelValueContainer>
          <Select.Label>{'Favorite fruits'}</Select.Label>
          <Select.Value />
        </Select.LabelValueContainer>
        <Select.ClearButton />
        <Select.TriggerButton>
          <Select.Chevron />
        </Select.TriggerButton>
      </Select.TriggerGroup>
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
