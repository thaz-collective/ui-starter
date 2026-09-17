import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '#src/components/card';

import { Skeleton } from './index';

const meta = {
  title: 'Component/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['text', 'circle', 'rectangle'],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { shape: 'text' },
  render: (args) => (
    <Skeleton
      {...args}
      className="w-64"
    />
  ),
};

export const Shapes: Story = {
  args: { shape: 'text' },
  render: () => (
    <div className="flex w-64 flex-col items-start gap-4">
      <Skeleton shape="text" />
      <Skeleton
        shape="circle"
        className="size-12"
      />
      <Skeleton
        shape="rectangle"
        className="h-32"
      />
    </div>
  ),
};

export const TextLines: Story = {
  args: { shape: 'text' },
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Skeleton shape="text" />
      <Skeleton shape="text" />
      <Skeleton
        shape="text"
        className="w-2/3"
      />
    </div>
  ),
};

export const AvatarWithText: Story = {
  args: { shape: 'text' },
  render: () => (
    <div className="flex w-64 items-center gap-3">
      <Skeleton
        shape="circle"
        className="size-10 shrink-0"
      />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton
          shape="text"
          className="w-1/2"
        />
        <Skeleton
          shape="text"
          className="w-full"
        />
      </div>
    </div>
  ),
};

function CardSkeletonExample({ variant }: { variant: 'default' | 'secondary' | 'tertiary' }) {
  return (
    <Card
      variant={variant}
      className="w-64"
    >
      <Skeleton
        shape="rectangle"
        className="h-32 rounded-b-none"
      />
      <Card.Header>
        <div className="flex items-center gap-3">
          <Skeleton
            shape="circle"
            className="size-8 shrink-0"
          />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton
              shape="text"
              className="w-1/2"
            />
            <Skeleton
              shape="text"
              className="w-1/3"
            />
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col gap-2">
          <Skeleton shape="text" />
          <Skeleton shape="text" />
          <Skeleton
            shape="text"
            className="w-2/3"
          />
        </div>
      </Card.Content>
    </Card>
  );
}

export const CardSkeleton: Story = {
  args: { shape: 'text' },
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      <CardSkeletonExample variant="default" />
      <CardSkeletonExample variant="secondary" />
      <CardSkeletonExample variant="tertiary" />
    </div>
  ),
};
