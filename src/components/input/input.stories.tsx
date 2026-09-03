import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FieldContainer } from '#src/components/field-container';
import { Label } from '#src/components/label';
import { TextField } from '#src/components/text-field';

import { Input } from './index';

const meta = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

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
  render: () => <DefaultExample />,
};
