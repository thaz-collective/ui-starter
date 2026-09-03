import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { TextField } from './index';

const meta = {
  title: 'Component/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

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
      <TextField.FieldContainer>
        <TextField.Label>{'Full name'}</TextField.Label>
        <TextField.Input placeholder="Jane Smith" />
      </TextField.FieldContainer>
      <TextField.Description>{'Used on your public profile.'}</TextField.Description>
    </TextField>
  );
}

export const Default: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function RequiredExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.FieldContainer>
      <TextField.Description>{'Required to create your account.'}</TextField.Description>
    </TextField>
  );
}

export const Required: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <RequiredExample />,
};

function ErrorStateExample() {
  const [value, setValue] = useState('');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input placeholder="you@example.com" />
      </TextField.FieldContainer>
      <TextField.FieldError>{'Please enter a valid email address.'}</TextField.FieldError>
    </TextField>
  );
}

export const ErrorState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.FieldContainer>
    </TextField>
  );
}

export const DisabledState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

function ReadonlyStateExample() {
  const [value, setValue] = useState('jane@example.com');

  return (
    <TextField
      className="w-64"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <TextField.FieldContainer>
        <TextField.Label>{'Email'}</TextField.Label>
        <TextField.Input />
      </TextField.FieldContainer>
      <TextField.Description>{'Contact support to change this.'}</TextField.Description>
    </TextField>
  );
}

export const ReadonlyState: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <ReadonlyStateExample />,
};

const CARD_VARIANTS = ['default', 'secondary', 'tertiary'] as const;

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
            <TextField>
              <TextField.FieldContainer>
                <TextField.Label>{'Full name'}</TextField.Label>
                <TextField.Input placeholder="Jane Smith" />
              </TextField.FieldContainer>
            </TextField>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export const OnCards: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <OnCardsExample />,
};

function DebouncedExample() {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <TextField.RootDebounced
        className="w-64"
        value={debouncedValue}
        onChange={setDebouncedValue}
        debounceOptions={{ wait: 500 }}
      >
        <TextField.FieldContainer>
          <TextField.Label>{'Search'}</TextField.Label>
          <TextField.Input
            onInput={(event) => {
              setValue(event.currentTarget.value);
            }}
          />
        </TextField.FieldContainer>
      </TextField.RootDebounced>
      <dl className="flex flex-col gap-1 text-xs text-field-foreground">
        <div className="flex gap-2">
          <dt className="font-medium">{'value:'}</dt>
          <dd>{value || '—'}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">{'debouncedValue:'}</dt>
          <dd>{debouncedValue || '—'}</dd>
        </div>
      </dl>
    </div>
  );
}

export const Debounced: Story = {
  args: { value: '', onChange: () => {}, children: null },
  render: () => <DebouncedExample />,
};
