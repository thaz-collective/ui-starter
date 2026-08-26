import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxGroupWithErrorStateExample() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Checkbox.Group
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <Checkbox.GroupLabel>{'Notifications'}</Checkbox.GroupLabel>
      <Checkbox.GroupField value="email">
        <Checkbox.Button>{'Email'}</Checkbox.Button>
      </Checkbox.GroupField>
      <Checkbox.GroupField value="sms">
        <Checkbox.Button>{'SMS'}</Checkbox.Button>
      </Checkbox.GroupField>
      <Checkbox.GroupField value="push">
        <Checkbox.Button>{'Push notification'}</Checkbox.Button>
      </Checkbox.GroupField>
      <Checkbox.FieldError>{'Please select at least one option.'}</Checkbox.FieldError>
    </Checkbox.Group>
  );
}
