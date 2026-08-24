import type { ComponentPropsWithRef } from 'react';

import { CalendarCell as RACCalendarCell, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const cellVariants = tv({
  base: [
    'size-8 cursor-default rounded-md p-0 text-center text-sm outline-none',
    'data-outside-month:text-muted-foreground/40',
    'data-hovered:bg-muted',
    'data-pressed:brightness-95',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    'data-selected:bg-primary data-selected:text-primary-foreground',
    'data-today:font-semibold',
    'data-unavailable:text-muted-foreground/40 data-unavailable:line-through',
    'data-disabled:opacity-50',
  ],
});

export type CalendarCellProps = ComponentPropsWithRef<typeof RACCalendarCell>;

export function CalendarCell(props: CalendarCellProps) {
  return (
    <RACCalendarCell
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return cellVariants({ ...renderProps, className });
      })}
    />
  );
}
