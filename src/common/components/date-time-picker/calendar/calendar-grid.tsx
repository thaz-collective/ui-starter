import type { ComponentPropsWithRef } from 'react';

import { CalendarGrid as RACCalendarGrid } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const gridVariants = tv({
  base: ['w-full border-collapse'],
});

export type CalendarGridProps = ComponentPropsWithRef<typeof RACCalendarGrid>;

export function CalendarGrid(props: CalendarGridProps) {
  return (
    <RACCalendarGrid
      {...props}
      className={gridVariants({ className: props.className })}
    />
  );
}
