import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

import { Surface } from '#src/common/components/surface';

const cardVariants = tv({
  base: ['group/card flex flex-col overflow-hidden rounded-xl'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: '',
      default: 'border-border border',
      secondary: 'border-border border',
      tertiary: 'border-border border',
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
