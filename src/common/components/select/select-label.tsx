import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'text-xs leading-none font-medium',
    'text-muted-foreground',
    'pointer-events-none select-none',

    // required indicator
    'group-data-[required="true"]/select:after:content-["*"]',
    'group-data-[required="true"]/select:after:ml-0.5',
    // hover / focus
    'group-data-[hovered]/trigger:text-primary-hover',
    'group-data-[focus-visible]/trigger:text-primary',
    'group-data-[invalid="true"]/select:group-data-[hovered]/trigger:text-danger-hover',
    'group-data-[invalid="true"]/select:group-data-[focus-visible]/trigger:text-danger',
    // invalid
    'group-data-[invalid="true"]/select:text-danger',
    // disabled
    'group-data-[disabled="true"]/select:cursor-not-allowed',
  ],
});

type LabelProps = SetRequired<ComponentPropsWithRef<typeof RACLabel>, 'children'> & VariantProps<typeof labelVariants>;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={labelVariants({ ...props })}
    />
  );
}
