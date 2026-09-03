import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from '#src/components/text-field';

import { FieldContainer } from './index';

const meta = {
  title: 'Component/FieldContainer',
  component: FieldContainer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FieldContainer>;

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
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </FieldContainer>
    </TextField>
  );
}

export const Default: Story = {
  args: { children: null },
  render: () => <DefaultExample />,
};
