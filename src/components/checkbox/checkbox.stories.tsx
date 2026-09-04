import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { Checkbox } from './index';

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
    </Checkbox>
  );
}

export const Default: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function WithDescriptionExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
    >
      <Checkbox.Button>{'Subscribe to newsletter'}</Checkbox.Button>
      <Checkbox.Description>{'Occasional product updates, no spam.'}</Checkbox.Description>
    </Checkbox>
  );
}

export const WithDescription: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <WithDescriptionExample />,
};

function IndeterminateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isIndeterminate={true}
    >
      <Checkbox.Button>{'Select all'}</Checkbox.Button>
    </Checkbox>
  );
}

export const Indeterminate: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <IndeterminateExample />,
};

function ErrorStateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isInvalid={true}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
      <Checkbox.FieldError>{'You must accept the terms to continue.'}</Checkbox.FieldError>
    </Checkbox>
  );
}

export const ErrorState: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isDisabled={true}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
    </Checkbox>
  );
}

export const DisabledState: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

const CARD_VARIANTS = ['default', 'secondary', 'tertiary'] as const;

function OnCardsCheckbox() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
    </Checkbox>
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
            <OnCardsCheckbox />
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export const OnCards: Story = {
  args: { isSelected: false, onChange: () => {}, children: null },
  render: () => <OnCardsExample />,
};
