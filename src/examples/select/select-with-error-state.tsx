import { Select } from '#src/common/components/select';

export function SelectWithErrorStateExample() {
  return (
    <Select
      className="w-64"
      placeholder="Select a fruit"
      isInvalid={true}
    >
      <Select.Trigger>
        <Select.Label>{'Favorite fruit'}</Select.Label>
        <Select.Value />
      </Select.Trigger>
      <Select.FieldError>{'Please select a fruit.'}</Select.FieldError>
      <Select.Popover>
        <Select.ListBox>
          <Select.Item id="apple">{'Apple'}</Select.Item>
          <Select.Item id="banana">{'Banana'}</Select.Item>
          <Select.Item id="cherry">{'Cherry'}</Select.Item>
        </Select.ListBox>
      </Select.Popover>
    </Select>
  );
}
