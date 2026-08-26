import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'text-sm leading-none font-medium',
    'text-foreground',

    'group-data-disabled/checkbox-group:cursor-not-allowed',
    'group-data-disabled/checkbox-group:opacity-50',
  ],
});

type GroupLabelProps = SetRequired<ComponentPropsWithRef<typeof RACLabel>, 'children'> &
  VariantProps<typeof labelVariants>;

export function GroupLabel(props: GroupLabelProps) {
  return (
    <RACLabel
      {...props}
      className={labelVariants({ ...props })}
    />
  );
}
