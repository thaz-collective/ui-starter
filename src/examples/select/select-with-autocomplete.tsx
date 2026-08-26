import { useState } from 'react';

import type { Key } from 'react-aria-components';

import { Select } from '#src/common/components/select';

export function SelectWithAutocompleteExample() {
  const [value, setValue] = useState<Key | null>(null);

  return (
    <Select
      className="w-64"
      placeholder="Select a fruit"
      value={value}
      onChange={setValue}
    >
      <Select.Trigger>
        <Select.LabelValueContainer>
          <Select.Label>{'Favorite fruit'}</Select.Label>
          <Select.Value />
        </Select.LabelValueContainer>
        <Select.Chevron />
      </Select.Trigger>
      <Select.Popover className="flex flex-col">
        <Select.Autocomplete>
          <Select.SearchField aria-label="Search fruits">
            <Select.SearchInput
              placeholder="Search fruits"
              // oxlint-disable-next-line jsx-a11y/no-autofocus -- autofocus into the popover's search field on open is the expected combobox/autocomplete pattern, not page-load autofocus
              autoFocus={true}
            />
          </Select.SearchField>
          <Select.ListBox>
            <Select.Item id="apple">{'Apple'}</Select.Item>
            <Select.Item id="banana">{'Banana'}</Select.Item>
            <Select.Item id="cherry">{'Cherry'}</Select.Item>
            <Select.Item id="grape">{'Grape'}</Select.Item>
          </Select.ListBox>
        </Select.Autocomplete>
      </Select.Popover>
    </Select>
  );
}
