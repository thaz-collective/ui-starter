import { useState } from 'react';

import { Card } from '#src/common/components/card';
import { TextField } from '#src/common/components/text-field';

export function TextFieldInACardExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Sign in'}</Card.Title>
        <Card.Description>{'Enter your credentials to continue.'}</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-5">
        <TextField
          value={email}
          onChange={setEmail}
          isRequired={true}
        >
          <TextField.LabelInputContainer>
            <TextField.Label>{'Email'}</TextField.Label>
            <TextField.Input
              type="email"
              placeholder="you@example.com"
            />
          </TextField.LabelInputContainer>
        </TextField>
        <TextField
          value={password}
          onChange={setPassword}
          isRequired={true}
          isInvalid={true}
        >
          <TextField.LabelInputContainer>
            <TextField.Label>{'Password'}</TextField.Label>
            <TextField.Input
              type="password"
              placeholder="••••••••"
            />
          </TextField.LabelInputContainer>
          <TextField.FieldError>{'Incorrect password. Please try again.'}</TextField.FieldError>
        </TextField>
      </Card.Content>
    </Card>
  );
}
