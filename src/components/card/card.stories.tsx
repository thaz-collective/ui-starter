import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './index';

const meta = {
  title: 'Component/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['transparent', 'default', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="transparent"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Transparent'}</Card.Title>
        <Card.Description>{'No background or border.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  ),
};

export const Default: Story = {
  args: {
    variant: 'default',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Default'}</Card.Title>
        <Card.Description>{'The default surface + border.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
      <Card.Footer>{'Footer content'}</Card.Footer>
    </Card>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="secondary"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Secondary'}</Card.Title>
        <Card.Description>{'One layer deeper than default.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  ),
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="tertiary"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Tertiary'}</Card.Title>
        <Card.Description>{'Two layers deeper than default.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  ),
};

export const Nested: Story = {
  args: {
    variant: 'default',
    className: 'w-80',
    children: null,
  },
  render: () => (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Default'}</Card.Title>
        <Card.Description>{'Outermost card'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>{'Secondary'}</Card.Title>
            <Card.Description>{'Nested one level deep'}</Card.Description>
          </Card.Header>
          <Card.Content>
            <Card variant="tertiary">
              <Card.Header>
                <Card.Title>{'Tertiary'}</Card.Title>
                <Card.Description>{'Nested two levels deep'}</Card.Description>
              </Card.Header>
              <Card.Content>{'Innermost content.'}</Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </Card.Content>
    </Card>
  ),
};

export const Stat: Story = {
  args: {
    variant: 'default',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Monthly Revenue'}</Card.Title>
        <Card.Description>{'Compared to last 30 days'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-2xl font-bold">{'$12,540'}</p>
        <p className="mt-0.5 text-xs text-surface-foreground/70">{'+8.2% from last month'}</p>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View report →'}
        </button>
      </Card.Footer>
    </Card>
  ),
};

export const Notification: Story = {
  args: {
    variant: 'default',
    className: 'w-80',
    children: null,
  },
  render: () => (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Deployment complete'}</Card.Title>
        <Card.Description>{'Production · 2 minutes ago'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-sm opacity-75">
          {'Version 2.4.1 was successfully deployed with no errors. All health checks passed.'}
        </p>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View deployment'}
        </button>
        <button
          type="button"
          className="text-xs font-medium text-surface-foreground/70 hover:underline"
        >
          {'Dismiss'}
        </button>
      </Card.Footer>
    </Card>
  ),
};

export const Profile: Story = {
  args: {
    variant: 'default',
    className: 'w-64',
    children: null,
  },
  render: () => (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Content>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="text-sm font-bold text-primary">{'JD'}</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{'Jordan Davis'}</p>
            <p className="truncate text-xs text-surface-foreground/70">{'jordan@company.com'}</p>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View profile'}
        </button>
        <button
          type="button"
          className="text-xs font-medium text-surface-foreground/70 hover:underline"
        >
          {'Remove'}
        </button>
      </Card.Footer>
    </Card>
  ),
};

export const SettingsRow: Story = {
  args: {
    variant: 'secondary',
    className: 'w-80',
    children: null,
  },
  render: () => (
    <Card
      variant="secondary"
      className="w-80"
    >
      <Card.Content>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">{'Two-factor authentication'}</p>
            <p className="mt-0.5 text-xs text-surface-foreground/70">{'Add an extra layer of security'}</p>
          </div>
          <div className="h-5 w-9 shrink-0 rounded-full bg-primary" />
        </div>
      </Card.Content>
    </Card>
  ),
};
