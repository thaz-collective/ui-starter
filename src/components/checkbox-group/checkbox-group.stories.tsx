import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { CheckboxGroup } from './index';

const meta = {
  title: 'Component/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [value, setValue] = useState(['sms']);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
    >
      <CheckboxGroup.Label>{'Notifications'}</CheckboxGroup.Label>
      <CheckboxGroup.Description>{'Choose how you want to be notified.'}</CheckboxGroup.Description>
      <CheckboxGroup.Field value="email">
        <CheckboxGroup.Button>{'Email'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="sms">
        <CheckboxGroup.Button>{'SMS'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="push">
        <CheckboxGroup.Button>{'Push notification'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
    </CheckboxGroup>
  );
}

export const Default: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function HorizontalExample() {
  const [value, setValue] = useState(['red']);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
      orientation="horizontal"
    >
      <CheckboxGroup.Label>{'Colors'}</CheckboxGroup.Label>
      <CheckboxGroup.Field value="red">
        <CheckboxGroup.Button>{'Red'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="green">
        <CheckboxGroup.Button>{'Green'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="blue">
        <CheckboxGroup.Button>{'Blue'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
    </CheckboxGroup>
  );
}

export const Horizontal: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <HorizontalExample />,
};

function RequiredExample() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <CheckboxGroup.Label>{'Notifications'}</CheckboxGroup.Label>
      <CheckboxGroup.Field value="email">
        <CheckboxGroup.Button>{'Email'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="sms">
        <CheckboxGroup.Button>{'SMS'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="push">
        <CheckboxGroup.Button>{'Push notification'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
    </CheckboxGroup>
  );
}

export const Required: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <RequiredExample />,
};

function ErrorStateExample() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <CheckboxGroup.Label>{'Notifications'}</CheckboxGroup.Label>
      <CheckboxGroup.Field value="email">
        <CheckboxGroup.Button>{'Email'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="sms">
        <CheckboxGroup.Button>{'SMS'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="push">
        <CheckboxGroup.Button>{'Push notification'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.FieldError>{'Please select at least one option.'}</CheckboxGroup.FieldError>
    </CheckboxGroup>
  );
}

export const ErrorState: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [value, setValue] = useState(['sms']);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <CheckboxGroup.Label>{'Notifications'}</CheckboxGroup.Label>
      <CheckboxGroup.Field value="email">
        <CheckboxGroup.Button>{'Email'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="sms">
        <CheckboxGroup.Button>{'SMS'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="push">
        <CheckboxGroup.Button>{'Push notification'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
    </CheckboxGroup>
  );
}

export const DisabledState: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

const CARD_VARIANTS = ['default', 'secondary', 'tertiary'] as const;

function OnCardsCheckboxGroup() {
  const [value, setValue] = useState(['sms']);

  return (
    <CheckboxGroup
      value={value}
      onChange={setValue}
    >
      <CheckboxGroup.Label>{'Notifications'}</CheckboxGroup.Label>
      <CheckboxGroup.Field value="email">
        <CheckboxGroup.Button>{'Email'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
      <CheckboxGroup.Field value="sms">
        <CheckboxGroup.Button>{'SMS'}</CheckboxGroup.Button>
      </CheckboxGroup.Field>
    </CheckboxGroup>
  );
}

function OnCardsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {CARD_VARIANTS.map((variant) => (
        <Card
          key={variant}
          variant={variant}
          className="w-64"
        >
          <Card.Header>
            <Card.Title className="capitalize">{variant}</Card.Title>
          </Card.Header>
          <Card.Content>
            <OnCardsCheckboxGroup />
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export const OnCards: Story = {
  args: { value: [], onChange: () => {}, children: null },
  render: () => <OnCardsExample />,
};
