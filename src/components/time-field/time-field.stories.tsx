import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { TimeField } from './index';

const meta = {
  title: 'Component/TimeField',
  component: TimeField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TimeField>;

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
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>{'Choose a start time.'}</TimeField.Description>
    </TimeField>
  );
}

export const Default: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <DefaultExample />,
};

function PlainDateTimeValueExample() {
  const [value, setValue] = useState<Temporal.PlainDateTime | null>(
    Temporal.PlainDateTime.from({ year: 2026, month: 9, day: 4, hour: 14, minute: 30 }),
  );

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Appointment time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>
        {'Backed by a Temporal.PlainDateTime — only the time segments are editable; the date stays fixed.'}
      </TimeField.Description>
    </TimeField>
  );
}

export const PlainDateTimeValue: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <PlainDateTimeValueExample />,
};

function ZonedDateTimeValueExample() {
  const [value, setValue] = useState<Temporal.ZonedDateTime | null>(
    Temporal.ZonedDateTime.from({
      year: 2026,
      month: 9,
      day: 4,
      hour: 14,
      minute: 30,
      timeZone: 'America/Los_Angeles',
    }),
  );

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Departure time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>
        {'Backed by a Temporal.ZonedDateTime pinned to America/Los_Angeles.'}
      </TimeField.Description>
    </TimeField>
  );
}

export const ZonedDateTimeValue: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <ZonedDateTimeValueExample />,
};

function WithSecondsExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      granularity="second"
      value={value}
      onChange={setValue}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Lap time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>{'Includes seconds.'}</TimeField.Description>
    </TimeField>
  );
}

export const WithSeconds: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <WithSecondsExample />,
};

function RequiredExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isRequired={true}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
    </TimeField>
  );
}

export const Required: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <RequiredExample />,
};

function ErrorStateExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isInvalid={true}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.FieldError>{'Please choose a valid time.'}</TimeField.FieldError>
    </TimeField>
  );
}

export const ErrorState: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <ErrorStateExample />,
};

function DisabledStateExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(Temporal.PlainTime.from({ hour: 14, minute: 30 }));

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isDisabled={true}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>{'This field is disabled.'}</TimeField.Description>
    </TimeField>
  );
}

export const DisabledState: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <DisabledStateExample />,
};

function ReadonlyStateExample() {
  const [value, setValue] = useState<Temporal.PlainTime | null>(Temporal.PlainTime.from({ hour: 14, minute: 30 }));

  return (
    <TimeField
      className="w-48"
      value={value}
      onChange={setValue}
      isReadOnly={true}
    >
      <TimeField.FieldContainer>
        <TimeField.Label>{'Meeting time'}</TimeField.Label>
        <TimeField.Input />
      </TimeField.FieldContainer>
      <TimeField.Description>{'This field is read-only.'}</TimeField.Description>
    </TimeField>
  );
}

export const ReadonlyState: Story = {
  args: { value: null, onChange: () => {}, children: null },
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
            <TimeField
              value={null}
              onChange={() => {}}
            >
              <TimeField.FieldContainer>
                <TimeField.Label>{'Meeting time'}</TimeField.Label>
                <TimeField.Input />
              </TimeField.FieldContainer>
            </TimeField>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export const OnCards: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <OnCardsExample />,
};

function DebouncedExample() {
  const [debouncedValue, setDebouncedValue] = useState<Temporal.PlainTime | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <TimeField.RootDebounced
        className="w-48"
        value={debouncedValue}
        onChange={setDebouncedValue}
        debounceOptions={{ wait: 500 }}
      >
        <TimeField.FieldContainer>
          <TimeField.Label>{'Meeting time'}</TimeField.Label>
          <TimeField.Input />
        </TimeField.FieldContainer>
      </TimeField.RootDebounced>
      <dl className="flex flex-col gap-1 text-xs text-field-foreground">
        <div className="flex gap-2">
          <dt className="font-medium">{'debouncedValue:'}</dt>
          <dd>{debouncedValue?.toString() ?? '—'}</dd>
        </div>
      </dl>
    </div>
  );
}

export const Debounced: Story = {
  args: { value: null, onChange: () => {}, children: null },
  render: () => <DebouncedExample />,
};
