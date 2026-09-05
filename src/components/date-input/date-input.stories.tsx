import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimeField } from '#src/components/time-field';

import { DateInput } from './index';

const meta = {
  title: 'Component/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <DateInput />
      </TimeField.FieldContainer>
    </TimeField>
  );
}

export const Default: Story = {
  args: {},
  render: () => <DefaultExample />,
};
