import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, Popover as RACPopover } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { useSelectTriggerRef } from './select-trigger-ref-context';

export type SelectPopoverProps = Omit<ComponentPropsWithRef<typeof RACPopover>, 'triggerRef'>;

export function SelectPopover(props: SelectPopoverProps) {
  const contextTriggerRef = useSelectTriggerRef();

  return (
    <RACPopover
      {...props}
      triggerRef={contextTriggerRef}
      offset={8}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'border-border w-[--trigger-width] rounded-lg border bg-surface-default text-surface-default-foreground shadow-lg',
            'outline-none',
            'transition-[opacity,transform] duration-150',
            'data-entering:scale-95 data-entering:opacity-0',
            'data-exiting:scale-95 data-exiting:opacity-0',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
