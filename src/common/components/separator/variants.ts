import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const separatorVariants = tv({
  base: 'bg-border',
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
export type RequiredSeparatorVariants = Required<SetNonNullable<SeparatorVariants>>;
