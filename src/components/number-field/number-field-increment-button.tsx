import type { ComponentPropsWithRef } from 'react';

import { ChevronUp } from 'lucide-react';
import { Button as RACButton } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type NumberFieldIncrementButtonProps = Omit<ComponentPropsWithRef<typeof RACButton>, 'slot' | 'children'>;

export function NumberFieldIncrementButton(props: NumberFieldIncrementButtonProps) {
  return (
    <RACButton
      {...props}
      slot="increment"
      className={
        cn(
          'flex w-8 flex-1 cursor-default items-center justify-center text-field-foreground/70 transition-colors outline-none',

          'data-disabled:opacity-50',

          'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',

          'data-hovered:bg-primary/10 data-hovered:text-field-foreground',

          'data-pressed:brightness-95',

          props.className,
        ) ?? ''
      }
    >
      <ChevronUp className="size-3" />
    </RACButton>
  );
}
