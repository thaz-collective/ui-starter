import type { ComponentPropsWithRef } from 'react';

import { ChevronUp } from 'lucide-react';
import { Button } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const incrementButtonVariants = tv({
  base: [
    'flex w-8 flex-1 cursor-default items-center justify-center text-muted-foreground transition-colors outline-none',
    'data-disabled:opacity-50',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',
    'data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground',
    'data-pressed:brightness-95',
  ],
});

export type NumberFieldIncrementButtonProps = Omit<ComponentPropsWithRef<typeof Button>, 'slot' | 'children'>;

export function NumberFieldIncrementButton(props: NumberFieldIncrementButtonProps) {
  return (
    <Button
      slot="increment"
      {...props}
      className={incrementButtonVariants()}
    >
      <ChevronUp className="size-3" />
    </Button>
  );
}
