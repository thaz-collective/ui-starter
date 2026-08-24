import type { ComponentPropsWithRef } from 'react';

import { ChevronDown } from 'lucide-react';
import { Button } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const decrementButtonVariants = tv({
  base: [
    'flex w-8 flex-1 cursor-default items-center justify-center border-t border-surface-tertiary text-muted-foreground transition-colors outline-none',
    'data-disabled:opacity-50',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',
    'data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground',
    'data-pressed:brightness-95',
  ],
});

export type NumberFieldDecrementButtonProps = Omit<ComponentPropsWithRef<typeof Button>, 'slot' | 'children'>;

export function NumberFieldDecrementButton(props: NumberFieldDecrementButtonProps) {
  return (
    <Button
      slot="decrement"
      {...props}
      className={decrementButtonVariants()}
    >
      <ChevronDown className="size-3" />
    </Button>
  );
}
