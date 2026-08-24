import { useState } from 'react';

import { TextField } from '#src/common/components/text-field';

export function TextFieldWithDisabledStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.LabelInputContainer>
    </TextField>
  );
}
