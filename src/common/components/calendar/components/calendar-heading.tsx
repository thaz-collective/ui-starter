import { CalendarHeading as RACCalendarHeading } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/calendar/context';

export function CalendarHeading() {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarHeading must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return <RACCalendarHeading className={slots.heading({})} />;
}
