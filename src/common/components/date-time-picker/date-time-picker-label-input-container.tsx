import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const labelInputContainerVariants = tv({
  base: [
    'group/label-input-container',

    'relative flex items-stretch',

    'rounded-md',

    'bg-field',

    'transition-colors duration-150',

    'border border-field-border',
    'focus-within:border-primary hover:border-primary-hover',

    'group-data-[invalid="true"]/date-time-picker:border-danger',
    'group-data-[invalid="true"]/date-time-picker:hover:border-danger-hover',
    'group-data-[invalid="true"]/date-time-picker:focus-within:border-danger',

    'group-data-[disabled="true"]/date-time-picker:opacity-50',
    'group-data-[disabled="true"]/date-time-picker:cursor-not-allowed',
  ],
});

interface LabelInputContainerProps
  extends ComponentPropsWithRef<'div'>, VariantProps<typeof labelInputContainerVariants> {
  children: ReactNode;
}

export function LabelInputContainer(props: LabelInputContainerProps) {
  return (
    <div
      {...props}
      className={labelInputContainerVariants({ ...props })}
    />
  );
}
