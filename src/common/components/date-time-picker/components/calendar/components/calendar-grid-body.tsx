import { CalendarGridBody as RACCalendarGridBody } from 'react-aria-components';

import { CalendarCell } from './calendar-cell';

export function CalendarGridBody() {
  return <RACCalendarGridBody>{(date) => <CalendarCell date={date} />}</RACCalendarGridBody>;
}
