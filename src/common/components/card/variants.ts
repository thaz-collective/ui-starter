import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

import { surfaceVariants } from '#src/common/components/surface';

export const cardVariants = tv({
  extend: surfaceVariants,
  slots: {
    root: 'group/card flex flex-col overflow-hidden rounded-xl',
    header: 'group/card-header flex flex-col gap-0.5 px-4 pt-4 pb-2',
    title: 'group/card-title text-sm leading-none font-semibold tracking-tight',
    description: 'group/card-description text-xs leading-snug opacity-60',
    content: 'group/card-content px-4 pb-4',
    footer: 'group/card-footer flex items-center gap-2 px-4 pb-4',
  },
  variants: {
    variant: {
      transparent: {},
      default: {
        root: 'border-border border',
      },
      secondary: {
        root: 'border-border border',
      },
      tertiary: {
        root: 'border-border border',
      },
    },
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
export type SlotsCardVariants = ReturnType<typeof cardVariants>;
export type RequiredCardVariants = Required<SetNonNullable<CardVariants>>;
