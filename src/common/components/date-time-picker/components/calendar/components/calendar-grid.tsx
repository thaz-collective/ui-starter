import type { CalendarGridProps as RACCalendarGridProps } from 'react-aria-components';
import { CalendarGrid as RACCalendarGrid } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/date-time-picker/components/calendar/context';

export type CalendarGridProps = RACCalendarGridProps;

export function CalendarGrid(props: CalendarGridProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarGrid must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <RACCalendarGrid
      {...props}
      className={slots.grid({ className: props.className })}
    />
  );
}
