import { CalendarGridHeader as RACCalendarGridHeader } from 'react-aria-components';

import { CalendarHeaderCell } from './calendar-header-cell';

export function CalendarGridHeader() {
  return <RACCalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</RACCalendarGridHeader>;
}
