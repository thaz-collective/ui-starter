import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, Popover as RACPopover } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const popoverVariants = tv({
  base: [
    'border-border rounded-lg border bg-surface-default text-surface-default-foreground shadow-lg',
    'outline-none',
    'transition-[opacity,transform] duration-150',
    'data-entering:scale-95 data-entering:opacity-0',
    'data-exiting:scale-95 data-exiting:opacity-0',
  ],
});

export type DateTimePickerPopoverProps = ComponentPropsWithRef<typeof RACPopover>;

export function DateTimePickerPopover(props: DateTimePickerPopoverProps) {
  return (
    <RACPopover
      offset={8}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return popoverVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
