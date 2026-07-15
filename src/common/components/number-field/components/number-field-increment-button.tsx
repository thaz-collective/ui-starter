import type { ButtonProps } from 'react-aria-components';
import { ChevronUp } from 'lucide-react';
import { Button } from 'react-aria-components';

export type NumberFieldIncrementButtonProps = Omit<ButtonProps, 'slot' | 'children'>;

export function NumberFieldIncrementButton(props: NumberFieldIncrementButtonProps) {
  return (
    <Button
      slot="increment"
      {...props}
      className="flex w-8 flex-1 cursor-default items-center justify-center text-muted-foreground transition-colors outline-none data-disabled:opacity-50 data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground data-pressed:brightness-95"
    >
      <ChevronUp className="size-3" />
    </Button>
  );
}
