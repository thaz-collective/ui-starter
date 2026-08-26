import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxGroupExample() {
  const [value, setValue] = useState(['sms']);

  return (
    <Checkbox.Group
      value={value}
      onChange={setValue}
    >
      <Checkbox.GroupLabel>{'Notifications'}</Checkbox.GroupLabel>
      <Checkbox.GroupDescription>{'Choose how you want to be notified.'}</Checkbox.GroupDescription>
      <Checkbox.GroupField value="email">
        <Checkbox.Button>{'Email'}</Checkbox.Button>
      </Checkbox.GroupField>
      <Checkbox.GroupField value="sms">
        <Checkbox.Button>{'SMS'}</Checkbox.Button>
      </Checkbox.GroupField>
      <Checkbox.GroupField value="push">
        <Checkbox.Button>{'Push notification'}</Checkbox.Button>
      </Checkbox.GroupField>
    </Checkbox.Group>
  );
}
