import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FieldContainer } from '#src/components/field-container';
import { Input } from '#src/components/input';
import { TextField } from '#src/components/text-field';

import { Label } from './index';

const meta = {
  title: 'Component/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

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
