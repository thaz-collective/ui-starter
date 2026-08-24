import type { ComponentPropsWithRef } from 'react';

import { CalendarIcon } from 'lucide-react';
import { Button } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const triggerButtonVariants = tv({
  base: [
    'flex w-9 shrink-0 cursor-default items-center justify-center rounded-r-md text-muted-foreground transition-colors outline-none',
    'border-l border-field-border',
    'data-disabled:opacity-50',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',
    'data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground',
    'data-pressed:brightness-95',
  ],
});

export type DateTimePickerTriggerButtonProps = Omit<ComponentPropsWithRef<typeof Button>, 'children'>;

export function DateTimePickerTriggerButton(props: DateTimePickerTriggerButtonProps) {
  return (
    <Button
      {...props}
      className={triggerButtonVariants()}
    >
      <CalendarIcon className="size-4" />
    </Button>
  );
}
