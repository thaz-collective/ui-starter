import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from './surface';

const meta = {
  title: 'Component/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['transparent', 'default', 'secondary', 'tertiary', 'quaternary', 'quinary'],
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Transparent',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Tertiary',
  },
};

export const Quaternary: Story = {
  args: {
    variant: 'quaternary',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Quaternary',
  },
};

export const Quinary: Story = {
  args: {
    variant: 'quinary',
    className: 'rounded-lg border border-surface-border p-4 hover:bg-surface-hover',
    children: 'Quinary',
  },
};

export const Nested: Story = {
  args: {
    children: 'Nested',
  },
  render: () => (
    <Surface
      variant="default"
      className="w-full rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Default'}
      <Surface
        variant="secondary"
        className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
      >
        {'Secondary'}
        <Surface
          variant="tertiary"
          className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
        >
          {'Tertiary'}
          <Surface
            variant="quaternary"
            className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
          >
            {'Quaternary'}
            <Surface
              variant="quinary"
              className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
            >
              {'Quinary'}
            </Surface>
          </Surface>
        </Surface>
      </Surface>
    </Surface>
  ),
};
