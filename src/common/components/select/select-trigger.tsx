import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Button as RACButton, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const triggerVariants = tv({
  base: [
    'group/trigger',

    'flex w-full min-w-0 cursor-default items-center gap-2 rounded-md px-3 text-left text-sm outline-none',

    'text-foreground',

    'bg-field transition-colors duration-150',
    'border border-field-border',
    'data-hovered:border-primary-hover',
    'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',

    'data-disabled:cursor-not-allowed data-disabled:opacity-50',

    'group-data-[invalid="true"]/select:border-danger',
    'group-data-[invalid="true"]/select:data-hovered:border-danger-hover',
    'group-data-[invalid="true"]/select:data-focus-visible:border-danger',
  ],
});

type SelectTriggerProps = SetRequired<ComponentPropsWithRef<typeof RACButton>, 'children'> &
  VariantProps<typeof triggerVariants>;

export function SelectTrigger(props: SelectTriggerProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return triggerVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
