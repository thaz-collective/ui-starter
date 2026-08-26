import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const triggerGroupVariants = tv({
  base: [
    'group/trigger',

    'flex w-full min-w-0 flex-wrap items-center gap-1.5 rounded-md px-3 text-left text-sm outline-none',

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

type SelectTriggerGroupProps = SetRequired<ComponentPropsWithRef<typeof RACGroup>, 'children'> &
  VariantProps<typeof triggerGroupVariants>;

export function SelectTriggerGroup(props: SelectTriggerGroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return triggerGroupVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
