import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const skeletonVariants = tv({
  base: [
    'relative overflow-hidden bg-field-hover select-none',
    "after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer after:content-['']",
    'after:bg-linear-to-r after:from-transparent after:via-white/50 after:to-transparent after:mix-blend-overlay',
    'motion-reduce:after:hidden',
  ],
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
