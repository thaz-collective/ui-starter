import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '#src/components/input';
import { Label } from '#src/components/label';
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
        <Label>{'Full name'}</Label>
        <Input placeholder="Jane Smith" />
      </FieldContainer>
    </TextField>
  );
}

export const Default: Story = {
  args: { children: null },
  render: () => <DefaultExample />,
};
