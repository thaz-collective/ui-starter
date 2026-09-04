import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { Separator } from './index';

const meta = {
  title: 'Component/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <div className="flex h-16 w-64 flex-col gap-1">
      <p className="text-sm">{'Above the separator'}</p>
      <Separator {...args} />
      <p className="text-sm">{'Below the separator'}</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-16 w-64 flex-row gap-1">
      <span className="text-sm">{'Left'}</span>
      <Separator {...args} />
      <span className="text-sm">{'Right'}</span>
    </div>
  ),
};

export const InACard: Story = {
  args: { orientation: 'horizontal' },
  render: () => (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Account'}</Card.Title>
        <Card.Description>{'Manage your account settings.'}</Card.Description>
      </Card.Header>
      <Separator />
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'Edit'}
        </button>
      </Card.Footer>
    </Card>
  ),
};
