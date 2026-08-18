import type { CalendarCellProps as RACCalendarCellProps } from 'react-aria-components';
import { CalendarCell as RACCalendarCell, composeRenderProps } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/date-time-picker/components/calendar/context';

export type CalendarCellProps = RACCalendarCellProps;

export function CalendarCell(props: CalendarCellProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarCell must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <RACCalendarCell
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.cell({ ...props, ...renderProps, className });
      })}
    />
  );
}
