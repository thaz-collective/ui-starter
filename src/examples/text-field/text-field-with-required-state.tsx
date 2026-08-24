import { useState } from 'react';

import { TextField } from '#src/common/components/text-field';

export function TextFieldWithRequiredStateExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Required to create your account.'}</TextField.Description>
    </TextField>
  );
}
