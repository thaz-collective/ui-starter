import type { ButtonProps } from 'react-aria-components';
import { ChevronDown } from 'lucide-react';
import { Button } from 'react-aria-components';

export type NumberFieldDecrementButtonProps = Omit<ButtonProps, 'slot' | 'children'>;

export function NumberFieldDecrementButton(props: NumberFieldDecrementButtonProps) {
  return (
    <Button
      slot="decrement"
      {...props}
      className="flex w-8 flex-1 cursor-default items-center justify-center border-t border-surface-tertiary text-muted-foreground transition-colors outline-none data-disabled:opacity-50 data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground data-pressed:brightness-95"
    >
      <ChevronDown className="size-3" />
    </Button>
  );
}
