import type { ReactNode } from 'react';

import { useCalendarContext } from '#src/common/components/date-time-picker/components/calendar/context';

export interface CalendarHeaderProps {
  children: ReactNode;
}

export function CalendarHeader(props: CalendarHeaderProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarHeader must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return <div className={slots.header({})}>{props.children}</div>;
}
