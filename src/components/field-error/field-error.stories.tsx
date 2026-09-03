import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from '#src/components/text-field';

import { FieldError } from './index';

const meta = {
  title: 'Component/FieldError',
  component: FieldError,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FieldError>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.FieldContainer>
      <FieldError>{'Please enter a valid email address.'}</FieldError>
    </TextField>
  );
}

export const Default: Story = {
  args: { children: null },
  render: () => <DefaultExample />,
};
