import type { CalendarHeaderCellProps as RACCalendarHeaderCellProps } from 'react-aria-components';
import { CalendarHeaderCell as RACCalendarHeaderCell } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/date-time-picker/components/calendar/context';

export type CalendarHeaderCellProps = RACCalendarHeaderCellProps;

export function CalendarHeaderCell(props: CalendarHeaderCellProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarHeaderCell must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <RACCalendarHeaderCell
      {...props}
      className={slots.headerCell({ className: props.className })}
    />
  );
}
