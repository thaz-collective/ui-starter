import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const surfaceVariants = tv({
  base: ['group/surface', 'bg-surface text-surface-foreground'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: 'bg-transparent',
      default: [
        '[--surface-border:var(--surface-default-border)] [--surface-foreground:var(--surface-default-foreground)] [--surface-hover:var(--surface-default-hover)] [--surface:var(--surface-default)]',
        '[--field-border:var(--surface-secondary-border)] [--field-foreground:var(--surface-secondary-foreground)] [--field-hover:var(--surface-secondary-hover)] [--field:var(--surface-secondary)]',
      ],
      secondary: [
        '[--surface-border:var(--surface-secondary-border)] [--surface-foreground:var(--surface-secondary-foreground)] [--surface-hover:var(--surface-secondary-hover)] [--surface:var(--surface-secondary)]',
        '[--field-border:var(--surface-tertiary-border)] [--field-foreground:var(--surface-tertiary-foreground)] [--field-hover:var(--surface-tertiary-hover)] [--field:var(--surface-tertiary)]',
      ],
      tertiary: [
        '[--surface-border:var(--surface-tertiary-border)] [--surface-foreground:var(--surface-tertiary-foreground)] [--surface-hover:var(--surface-tertiary-hover)] [--surface:var(--surface-tertiary)]',
        '[--field-border:var(--surface-quaternary-border)] [--field-foreground:var(--surface-quaternary-foreground)] [--field-hover:var(--surface-quaternary-hover)] [--field:var(--surface-quaternary)]',
      ],
      quaternary: [
        '[--surface-border:var(--surface-quaternary-border)] [--surface-foreground:var(--surface-quaternary-foreground)] [--surface-hover:var(--surface-quaternary-hover)] [--surface:var(--surface-quaternary)]',
        '[--field-border:var(--surface-quinary-border)] [--field-foreground:var(--surface-quinary-foreground)] [--field-hover:var(--surface-quinary-hover)] [--field:var(--surface-quinary)]',
      ],
      quinary: [
        '[--surface-border:var(--surface-quinary-border)] [--surface-foreground:var(--surface-quinary-foreground)] [--surface-hover:var(--surface-quinary-hover)] [--surface:var(--surface-quinary)]',
      ],
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
