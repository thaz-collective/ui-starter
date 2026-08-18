import type { DateValue } from 'react-aria-components';

import type { CalendarProps as InternalCalendarProps } from '#src/common/components/date-time-picker/components/calendar';
import { Calendar as InternalCalendar } from '#src/common/components/date-time-picker/components/calendar';

export type DateTimePickerCalendarProps<T extends DateValue> = Omit<InternalCalendarProps<T>, 'children'>;

export function DateTimePickerCalendar<T extends DateValue>(props: DateTimePickerCalendarProps<T>) {
  return (
    <InternalCalendar {...props}>
      <InternalCalendar.Header>
        <InternalCalendar.PrevButton />
        <InternalCalendar.Heading />
        <InternalCalendar.NextButton />
      </InternalCalendar.Header>
      <InternalCalendar.Grid>
        <InternalCalendar.GridHeader />
        <InternalCalendar.GridBody />
      </InternalCalendar.Grid>
    </InternalCalendar>
  );
}
