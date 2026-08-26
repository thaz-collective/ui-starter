import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'absolute left-0 z-10',
    'top-1/2 -translate-y-1/2',
    'text-sm leading-none font-medium',
    'text-muted-foreground',
    'pointer-events-none select-none',
    'transition-all duration-150',

    // required indicator
    'group-data-[required="true"]/select:after:content-["*"]',
    'group-data-[required="true"]/select:after:ml-0.5',
    // hover
    'group-data-hovered/trigger:text-primary-hover',
    'group-data-[invalid="true"]/select:group-data-hovered/trigger:text-danger-hover',

    // open, focused, or has a value -> float up
    'group-data-open/select:top-1.5',
    'group-data-open/select:translate-y-0',
    'group-data-open/select:text-xs',
    'group-data-focus-visible/trigger:top-1.5',
    'group-data-focus-visible/trigger:translate-y-0',
    'group-data-focus-visible/trigger:text-xs',
    'group-has-data-[has-value=true]/trigger:top-1.5',
    'group-has-data-[has-value=true]/trigger:translate-y-0',
    'group-has-data-[has-value=true]/trigger:text-xs',

    // open, focused, or has a value -> highlight with primary color
    'group-data-open/select:text-primary',
    'group-data-focus-visible/trigger:text-primary',
    'group-has-data-[has-value=true]/trigger:text-primary',

    // invalid wins over the highlighted states above
    'group-data-[invalid="true"]/select:text-danger',
    'group-data-[invalid="true"]/select:group-data-open/select:text-danger',
    'group-data-[invalid="true"]/select:group-data-focus-visible/trigger:text-danger',
    'group-data-[invalid="true"]/select:group-has-data-[has-value=true]/trigger:text-danger',

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
