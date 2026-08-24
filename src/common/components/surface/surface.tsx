import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const surfaceVariants = tv({
  base: ['group/surface'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: 'bg-transparent',
      default: 'bg-surface-default text-surface-default-foreground [--field:var(--surface-secondary)]',
      secondary: 'bg-surface-secondary text-surface-secondary-foreground [--field:var(--surface-tertiary)]',
      tertiary: 'bg-surface-tertiary text-surface-tertiary-foreground [--field:var(--surface-quaternary)]',
    },
  },
});

type SurfaceProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> & VariantProps<typeof surfaceVariants>;

export function Surface(props: SurfaceProps) {
  return (
    <div
      {...props}
      className={surfaceVariants({ ...props })}
    />
  );
}
