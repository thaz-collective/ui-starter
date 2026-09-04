import type { ComponentPropsWithRef } from 'react';

import { Separator as RACSeparator } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const separatorVariants = tv({
  base: 'border-none bg-surface-border',
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

type SeparatorProps = ComponentPropsWithRef<typeof RACSeparator>;

export function Separator(props: SeparatorProps) {
  return (
    <RACSeparator
      {...props}
      className={separatorVariants({ ...props })}
    />
  );
}
