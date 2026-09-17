import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const skeletonVariants = tv({
  base: 'animate-shimmer bg-field-hover text-field-border select-none motion-reduce:animate-none',
  defaultVariants: {
    shape: 'text',
  },
  variants: {
    shape: {
      text: 'h-4 w-full rounded-sm',
      circle: 'aspect-square rounded-full',
      rectangle: 'w-full rounded-md',
    },
  },
});

type SkeletonProps = ComponentPropsWithRef<'div'> & VariantProps<typeof skeletonVariants>;

export function Skeleton(props: SkeletonProps) {
  return (
    <div
      {...props}
      role={props.role ?? 'presentation'}
      aria-hidden={props['aria-hidden'] ?? true}
      className={skeletonVariants({ ...props })}
    />
  );
}
