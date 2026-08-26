import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { Button as RACButton, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const triggerButtonVariants = tv({
  base: [
    'flex size-6 shrink-0 cursor-default items-center justify-center rounded outline-none',
    'text-muted-foreground',
    'data-hovered:bg-surface-muted',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    'data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
});

type SelectTriggerButtonProps = ComponentPropsWithRef<typeof RACButton> & VariantProps<typeof triggerButtonVariants>;

export function SelectTriggerButton(props: SelectTriggerButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return triggerButtonVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
