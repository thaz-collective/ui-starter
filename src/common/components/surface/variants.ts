import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const surfaceVariants = tv({
  slots: {
    root: ['group/surface'],
  },
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: {
        root: 'bg-transparent',
      },
      default: {
        root: 'bg-surface-default text-surface-default-foreground [--field:var(--surface-secondary)]',
      },
      secondary: {
        root: 'bg-surface-secondary text-surface-secondary-foreground [--field:var(--surface-tertiary)]',
      },
      tertiary: {
        root: 'bg-surface-tertiary text-surface-tertiary-foreground [--field:var(--surface-quaternary)]',
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type SlotsSurfaceVariants = ReturnType<typeof surfaceVariants>;
export type RequiredSurfaceVariants = Required<SetNonNullable<SurfaceVariants>>;
