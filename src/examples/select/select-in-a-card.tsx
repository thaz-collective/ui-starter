import { Card } from '#src/common/components/card';
import { Select } from '#src/common/components/select';

export function SelectInACardExample() {
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
        <Select placeholder="Select a method">
          <Select.Trigger>
            <Select.Label>{'Delivery method'}</Select.Label>
            <Select.Value />
          </Select.Trigger>
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
