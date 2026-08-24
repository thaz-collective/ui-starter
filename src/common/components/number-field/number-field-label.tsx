import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'absolute left-3 z-10',
    'top-1/2 -translate-y-1/2',
    'text-sm leading-none font-medium',
    'text-muted-foreground',
    'pointer-events-none select-none',
    'transition-all duration-150',

    // required indicator
    'group-data-[required="true"]/number-field:after:content-["*"]',
    'group-data-[required="true"]/number-field:after:ml-0.5',
    // hover
    'group-hover/label-input-container:text-primary-hover',
    'group-data-[invalid="true"]/number-field:group-hover/label-input-container:text-danger-hover',
    // input focused → float up
    'group-has-[input:focus]/label-input-container:top-1.5',
    'group-has-[input:focus]/label-input-container:translate-y-0',
    'group-has-[input:focus]/label-input-container:text-xs',
    'group-has-[input:focus]/label-input-container:text-primary',
    // error + focused → error color wins
    'group-data-[invalid="true"]/number-field:group-has-[input:focus]/label-input-container:text-danger',
    // has value → float up
    'group-has-[input:not(:placeholder-shown)]/label-input-container:top-1.5',
    'group-has-[input:not(:placeholder-shown)]/label-input-container:translate-y-0',
    'group-has-[input:not(:placeholder-shown)]/label-input-container:text-xs',
    // invalid
    'group-data-[invalid="true"]/number-field:text-danger',
    // disabled
    'group-data-[disabled="true"]/number-field:cursor-not-allowed',
  ],
});

type LabelProps = ComponentPropsWithRef<typeof RACLabel> & VariantProps<typeof labelVariants>;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={labelVariants({ ...props })}
    />
  );
}
