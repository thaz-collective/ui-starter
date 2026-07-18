import type { DateValue } from 'react-aria-components';

import type { CalendarProps as InternalCalendarProps } from '#src/common/components/calendar';
import { Calendar as InternalCalendar } from '#src/common/components/calendar';

export type DatePickerCalendarProps<T extends DateValue> = Omit<InternalCalendarProps<T>, 'children'>;

export function DatePickerCalendar<T extends DateValue>(props: DatePickerCalendarProps<T>) {
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
