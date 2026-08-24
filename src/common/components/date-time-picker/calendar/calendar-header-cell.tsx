import type { ComponentPropsWithRef } from 'react';

import { CalendarHeaderCell as RACCalendarHeaderCell } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const headerCellVariants = tv({
  base: ['pb-1 text-xs font-medium text-muted-foreground'],
});

export type CalendarHeaderCellProps = ComponentPropsWithRef<typeof RACCalendarHeaderCell>;

export function CalendarHeaderCell(props: CalendarHeaderCellProps) {
  return (
    <RACCalendarHeaderCell
      {...props}
      className={headerCellVariants({ className: props.className })}
    />
  );
}
