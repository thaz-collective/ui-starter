import { Select } from '#src/common/components/select';

export function SelectWithSectionsExample() {
  return (
    <Select
      className="w-64"
      placeholder="Select a food"
    >
      <Select.Trigger>
        <Select.Label>{'Favorite food'}</Select.Label>
        <Select.Value />
      </Select.Trigger>
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
