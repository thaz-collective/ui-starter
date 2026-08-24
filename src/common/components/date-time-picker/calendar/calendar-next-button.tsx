import type { ComponentPropsWithRef } from 'react';

import { ChevronRight } from 'lucide-react';
import { Button } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const navButtonVariants = tv({
  base: [
    'flex size-7 cursor-default items-center justify-center rounded-md text-muted-foreground transition-colors outline-none',
    'data-disabled:opacity-50',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    'data-hovered:bg-muted data-hovered:text-foreground',
    'data-pressed:brightness-95',
  ],
});

export type CalendarNextButtonProps = Omit<ComponentPropsWithRef<typeof Button>, 'slot' | 'children'>;

export function CalendarNextButton(props: CalendarNextButtonProps) {
  return (
    <Button
      slot="next"
      {...props}
      className={navButtonVariants()}
    >
      <ChevronRight className="size-4" />
    </Button>
  );
}
