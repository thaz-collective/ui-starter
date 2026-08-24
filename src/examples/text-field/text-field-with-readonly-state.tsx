import { useState } from 'react';

import { TextField } from '#src/common/components/text-field';

export function TextFieldWithReadonlyStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Contact support to change this.'}</TextField.Description>
    </TextField>
  );
}
