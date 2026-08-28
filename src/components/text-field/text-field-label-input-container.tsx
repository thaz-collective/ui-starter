import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
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

    'group-data-[invalid="true"]/text-field:border-danger',
    'group-data-[invalid="true"]/text-field:hover:border-danger-hover',
    'group-data-[invalid="true"]/text-field:focus-within:border-danger',

    'group-data-[disabled="true"]/text-field:opacity-50',
    'group-data-[disabled="true"]/text-field:cursor-not-allowed',
  ],
});

type LabelInputContainerProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> &
  VariantProps<typeof labelInputContainerVariants>;

export function LabelInputContainer(props: LabelInputContainerProps) {
  return (
    <div
      {...props}
      className={labelInputContainerVariants({ ...props })}
    />
  );
}
