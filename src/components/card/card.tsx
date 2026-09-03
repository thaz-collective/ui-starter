import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

import { Surface } from '#src/components/surface';

const cardVariants = tv({
  base: ['group/card flex flex-col gap-4 overflow-hidden rounded-xl py-4'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: '',
      default: 'border border-surface-border',
      secondary: 'border border-surface-border',
      tertiary: 'border border-surface-border',
    },
  },
});

type CardRootProps = SetRequired<ComponentPropsWithRef<typeof Surface>, 'children'> & VariantProps<typeof cardVariants>;

export function CardRoot(props: CardRootProps) {
  return (
    <Surface
      {...props}
      className={cardVariants({ ...props })}
    />
  );
}
