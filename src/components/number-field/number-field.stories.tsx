import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { NumberField } from './index';

const meta = {
  title: 'Component/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultExample() {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
    </NumberField>
  );
}

export const Default: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function FormattedExample() {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      formatOptions={{ style: 'currency', currency: 'USD' }}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Price'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
      <NumberField.Description>{'Shown to customers at checkout.'}</NumberField.Description>
    </NumberField>
  );
}

export const Formatted: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <FormattedExample />,
};

function WithMinMaxExample() {
  const [value, setValue] = useState(50);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={100}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Volume'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
      <NumberField.Description>{'Between 0 and 100.'}</NumberField.Description>
    </NumberField>
  );
}

export const WithMinMax: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <WithMinMaxExample />,
};

function RequiredExample() {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
    </NumberField>
  );
}

export const Required: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <RequiredExample />,
};

function ErrorStateExample() {
  const [value, setValue] = useState(0);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
      <NumberField.FieldError>{'Enter a quantity greater than zero.'}</NumberField.FieldError>
    </NumberField>
  );
}

export const ErrorState: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [value, setValue] = useState(5);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
    </NumberField>
  );
}

export const DisabledState: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

function ReadonlyStateExample() {
  const [value, setValue] = useState(5);

  return (
    <NumberField
      className="w-64"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <NumberField.FieldContainer>
        <NumberField.Label>{'Quantity'}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldContainer>
      <NumberField.Description>{'Set by your plan; contact support to change this.'}</NumberField.Description>
    </NumberField>
  );
}

export const ReadonlyState: Story = {
  args: { value: 0, onChange: () => {}, children: null },
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
            <NumberField minValue={1}>
              <NumberField.FieldContainer>
                <NumberField.Label>{'Quantity'}</NumberField.Label>
                <NumberField.Group>
                  <NumberField.Input />
                  <NumberField.StepButtons>
                    <NumberField.IncrementButton />
                    <NumberField.DecrementButton />
                  </NumberField.StepButtons>
                </NumberField.Group>
              </NumberField.FieldContainer>
            </NumberField>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export const OnCards: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <OnCardsExample />,
};

function DebouncedExample() {
  const [value, setValue] = useState(0);
  const [debouncedValue, setDebouncedValue] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <NumberField.RootDebounced
        className="w-64"
        value={debouncedValue}
        onChange={setDebouncedValue}
        debounceOptions={{ wait: 500 }}
      >
        <NumberField.FieldContainer>
          <NumberField.Label>{'Quantity'}</NumberField.Label>
          <NumberField.Group>
            <NumberField.Input
              onInput={(event) => {
                const nextValue = Number(event.currentTarget.value);

                if (Number.isNaN(nextValue)) {
                  setValue(0);
                } else {
                  setValue(nextValue);
                }
              }}
            />
            <NumberField.StepButtons>
              <NumberField.IncrementButton />
              <NumberField.DecrementButton />
            </NumberField.StepButtons>
          </NumberField.Group>
        </NumberField.FieldContainer>
      </NumberField.RootDebounced>
      <dl className="flex flex-col gap-1 text-xs text-field-foreground">
        <div className="flex gap-2">
          <dt className="font-medium">{'value:'}</dt>
          <dd>{value}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">{'debouncedValue:'}</dt>
          <dd>{debouncedValue}</dd>
        </div>
      </dl>
    </div>
  );
}

export const Debounced: Story = {
  args: { value: 0, onChange: () => {}, children: null },
  render: () => <DebouncedExample />,
};
