import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sparkles } from 'lucide-react';

import { Button } from '#src/components/button';
import { Card } from '#src/components/card';

import { Alert } from './index';

const meta = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
    },
    isInverted: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="default"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Scheduled maintenance'}</Alert.Title>
        <Alert.Description>{'The dashboard will be unavailable for 10 minutes tonight at 11pm.'}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="success"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Changes saved'}</Alert.Title>
        <Alert.Description>{'Your profile changes have been saved successfully.'}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="warning"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Storage almost full'}</Alert.Title>
        <Alert.Description>{"You've used 92% of your available storage."}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="danger"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Payment failed'}</Alert.Title>
        <Alert.Description>{'Your card was declined. Update your payment method to continue.'}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'default',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="default"
      className="w-96"
    >
      <Alert.Icon>
        <Sparkles />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>{'New feature available'}</Alert.Title>
        <Alert.Description>{'Try out the new dashboard layout.'}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  args: {
    variant: 'success',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="success"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Invite sent'}</Alert.Title>
      </Alert.Content>
    </Alert>
  ),
};

export const WithActions: Story = {
  args: {
    variant: 'danger',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="danger"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'File deleted'}</Alert.Title>
        <Alert.Description>{'"Q3 Report.pdf" was permanently deleted.'}</Alert.Description>
        <Alert.Actions>
          <Button
            size="sm"
            variant="outline"
          >
            {'Undo'}
          </Button>
        </Alert.Actions>
      </Alert.Content>
    </Alert>
  ),
};

export const WithCloseButton: Story = {
  args: {
    variant: 'default',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="default"
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'New version available'}</Alert.Title>
        <Alert.Description>{'Refresh the page to get the latest features.'}</Alert.Description>
      </Alert.Content>
      <Alert.CloseButton />
    </Alert>
  ),
};

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    className: 'w-96',
    children: null,
  },
  render: function Render() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
      return <p className="w-96 text-sm text-surface-foreground/70">{'Dismissed.'}</p>;
    }

    return (
      <Alert
        variant="warning"
        className="w-96"
      >
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Session expiring soon'}</Alert.Title>
          <Alert.Description>{"You'll be signed out in 5 minutes due to inactivity."}</Alert.Description>
        </Alert.Content>
        <Alert.CloseButton
          onPress={() => {
            setIsVisible(false);
          }}
        />
      </Alert>
    );
  },
};

export const OnCards: Story = {
  args: {
    variant: 'default',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Card
        variant="default"
        className="w-96"
      >
        <Card.Header>
          <Card.Title>{'Billing'}</Card.Title>
          <Card.Description>{'Manage your subscription and payment method.'}</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          <Alert variant="default">
            <Alert.Icon />
            <Alert.Content>
              <Alert.Title>{'Next invoice'}</Alert.Title>
              <Alert.Description>{'Your next invoice will be issued on the 1st.'}</Alert.Description>
            </Alert.Content>
          </Alert>
          <Alert variant="warning">
            <Alert.Icon />
            <Alert.Content>
              <Alert.Title>{'Card expiring soon'}</Alert.Title>
              <Alert.Description>{'Update your card before it expires at the end of the month.'}</Alert.Description>
            </Alert.Content>
          </Alert>
          <Alert variant="danger">
            <Alert.Icon />
            <Alert.Content>
              <Alert.Title>{'Payment failed'}</Alert.Title>
              <Alert.Description>{'Your last payment attempt was declined.'}</Alert.Description>
            </Alert.Content>
          </Alert>
          <Alert variant="success">
            <Alert.Icon />
            <Alert.Content>
              <Alert.Title>{'Plan upgraded'}</Alert.Title>
              <Alert.Description>{"You're now on the Pro plan."}</Alert.Description>
            </Alert.Content>
          </Alert>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    variant: 'default',
    className: 'w-96',
    children: null,
  },
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Alert variant="default">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Default'}</Alert.Title>
          <Alert.Description>{'Neutral, informational messaging.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="success">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Success'}</Alert.Title>
          <Alert.Description>{'An action completed successfully.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="warning">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Warning'}</Alert.Title>
          <Alert.Description>{'Something needs attention soon.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="danger">
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Danger'}</Alert.Title>
          <Alert.Description>{'An action failed or needs immediate attention.'}</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  ),
};

export const Solid: Story = {
  args: {
    variant: 'danger',
    isInverted: false,
    className: 'w-96',
    children: null,
  },
  render: () => (
    <Alert
      variant="danger"
      isInverted={false}
      className="w-96"
    >
      <Alert.Icon />
      <Alert.Content>
        <Alert.Title>{'Payment failed'}</Alert.Title>
        <Alert.Description>{'Your card was declined. Update your payment method to continue.'}</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
};

export const AllVariantsSolid: Story = {
  args: {
    variant: 'default',
    isInverted: false,
    className: 'w-96',
    children: null,
  },
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Alert
        variant="default"
        isInverted={false}
      >
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Default'}</Alert.Title>
          <Alert.Description>{'Neutral, informational messaging.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert
        variant="success"
        isInverted={false}
      >
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Success'}</Alert.Title>
          <Alert.Description>{'An action completed successfully.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert
        variant="warning"
        isInverted={false}
      >
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Warning'}</Alert.Title>
          <Alert.Description>{'Something needs attention soon.'}</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert
        variant="danger"
        isInverted={false}
      >
        <Alert.Icon />
        <Alert.Content>
          <Alert.Title>{'Danger'}</Alert.Title>
          <Alert.Description>{'An action failed or needs immediate attention.'}</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  ),
};
