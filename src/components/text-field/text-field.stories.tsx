import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

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
      <TextField.LabelInputContainer>
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Used on your public profile.'}</TextField.Description>
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
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Required to create your account.'}</TextField.Description>
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
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.LabelInputContainer>
      <TextField.FieldError>{'Please enter a valid email address.'}</TextField.FieldError>
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
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.LabelInputContainer>
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
      <TextField.LabelInputContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.LabelInputContainer>
      <TextField.Description>{'Contact support to change this.'}</TextField.Description>
    </TextField>
  );
}

export const ReadonlyState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <ReadonlyStateExample />,
};
