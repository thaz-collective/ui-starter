import type { ComponentPropsWithRef } from 'react';

import { ChevronsUpDown } from 'lucide-react';
import { Button as RACButton, composeRenderProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

interface SelectTriggerButtonProps extends Omit<ComponentPropsWithRef<typeof RACButton>, 'children' | 'slot'> {
  iconProps?: ComponentPropsWithRef<typeof ChevronsUpDown>;
}

export function SelectTriggerButton(props: SelectTriggerButtonProps) {
  const { iconProps, ...buttonProps } = props;

  return (
    <RACButton
      {...buttonProps}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/button-trigger',

            'flex size-6 shrink-0 cursor-default items-center justify-center rounded outline-none',

            'text-muted-foreground',

            'data-hovered:bg-surface-muted',
            'data-focus-visible:ring-1 data-focus-visible:ring-primary',
            'data-disabled:cursor-not-allowed data-disabled:opacity-50',

            className,
          ) ?? ''
        );
      })}
    >
      <ChevronsUpDown
        {...iconProps}
        className={
          cn(
            'size-4 shrink-0 self-center',

            iconProps?.className,
          ) ?? ''
        }
      />
    </RACButton>
  );
}
