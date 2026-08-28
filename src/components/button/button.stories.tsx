import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus } from 'lucide-react';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'outline'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isInverted: { control: 'boolean' },
    isIcon: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const SmallIcon: Story = {
  args: {
    size: 'sm',
    isIcon: true,
    'aria-label': 'Add',
    children: <Plus />,
  },
};

export const MediumIcon: Story = {
  args: {
    size: 'md',
    isIcon: true,
    'aria-label': 'Add',
    children: <Plus />,
  },
};

export const LargeIcon: Story = {
  args: {
    size: 'lg',
    isIcon: true,
    'aria-label': 'Add',
    children: <Plus />,
  },
};

export const PrimaryInverted: Story = {
  args: {
    variant: 'primary',
    isInverted: true,
    children: 'Primary',
  },
};

export const SecondaryInverted: Story = {
  args: {
    variant: 'secondary',
    isInverted: true,
    children: 'Secondary',
  },
};

export const DangerInverted: Story = {
  args: {
    variant: 'danger',
    isInverted: true,
    children: 'Danger',
  },
};

export const SuccessInverted: Story = {
  args: {
    variant: 'success',
    isInverted: true,
    children: 'Success',
  },
};

export const WarningInverted: Story = {
  args: {
    variant: 'warning',
    isInverted: true,
    children: 'Warning',
  },
};
