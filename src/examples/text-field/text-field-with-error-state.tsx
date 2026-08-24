import { useState } from 'react';

import { TextField } from '#src/common/components/text-field';

export function TextFieldWithErrorStateExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.LabelInputContainer>
      <TextField.FieldError>{'Please enter a valid email address.'}</TextField.FieldError>
    </TextField>
  );
}
