import type { ComponentPropsWithRef } from 'react';

import { ChevronDown } from 'lucide-react';
import { Button as RACButton } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type NumberFieldDecrementButtonProps = Omit<ComponentPropsWithRef<typeof RACButton>, 'slot' | 'children'>;

export function NumberFieldDecrementButton(props: NumberFieldDecrementButtonProps) {
  return (
    <RACButton
      {...props}
      slot="decrement"
      className={
        cn(
          'flex w-8 flex-1 cursor-default items-center justify-center border-t border-field-border text-field-foreground/70 transition-colors outline-none',

          'data-disabled:opacity-50',

          'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',

          'data-hovered:bg-primary/10 data-hovered:text-field-foreground',

          'data-pressed:brightness-95',

          props.className,
        ) ?? ''
      }
    >
      <ChevronDown className="size-3" />
    </RACButton>
  );
}
