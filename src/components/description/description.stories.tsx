import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from '#src/components/text-field';

import { Description } from './index';

const meta = {
  title: 'Component/Description',
  component: Description,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Description>;

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
      <TextField.FieldContainer>
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </TextField.FieldContainer>
      <Description>{'Used on your public profile.'}</Description>
    </TextField>
  );
}

export const Default: Story = {
  args: { children: null },
  render: () => <DefaultExample />,
};

function InvalidExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </TextField.FieldContainer>
      <Description>{'Used on your public profile.'}</Description>
      <TextField.FieldError>{'This field is required.'}</TextField.FieldError>
    </TextField>
  );
}

export const Invalid: Story = {
  args: { children: null },
  render: () => <InvalidExample />,
};
