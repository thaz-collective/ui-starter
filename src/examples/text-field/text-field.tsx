import { useState } from 'react';

import { TextField } from '#src/common/components/text-field';

export function TextFieldExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
    >
      <TextField.LabelInputContainer>
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Used on your public profile.'}</TextField.Description>
    </TextField>
  );
}
