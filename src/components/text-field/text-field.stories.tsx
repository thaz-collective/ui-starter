import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Description } from '#src/components/description';
import { FieldContainer } from '#src/components/field-container';
import { FieldError } from '#src/components/field-error';
import { Input } from '#src/components/input';
import { Label } from '#src/components/label';

import { TextField } from './index';

const meta = {
  title: 'Component/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
    >
      <FieldContainer>
        <Label>{'Full name'}</Label>
        <Input placeholder="Jane Smith" />
      </FieldContainer>
      <Description>{'Used on your public profile.'}</Description>
    </TextField>
  );
}

export const Default: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function RequiredExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <FieldContainer>
        <Label>{'Email'}</Label>
        <Input placeholder="you@example.com" />
      </FieldContainer>
      <Description>{'Required to create your account.'}</Description>
    </TextField>
  );
}

export const Required: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <RequiredExample />,
};

function ErrorStateExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <FieldContainer>
        <Label>{'Email'}</Label>
        <Input placeholder="you@example.com" />
      </FieldContainer>
      <FieldError>{'Please enter a valid email address.'}</FieldError>
    </TextField>
  );
}

export const ErrorState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <FieldContainer>
        <Label>{'Email'}</Label>
        <Input />
      </FieldContainer>
    </TextField>
  );
}

export const DisabledState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

function ReadonlyStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <FieldContainer>
        <Label>{'Email'}</Label>
        <Input />
      </FieldContainer>
      <Description>{'Contact support to change this.'}</Description>
    </TextField>
  );
}

export const ReadonlyState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <ReadonlyStateExample />,
};
