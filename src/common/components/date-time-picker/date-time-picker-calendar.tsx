import type { ComponentPropsWithRef } from 'react';

import type { DateValue } from 'react-aria-components';

import { Calendar as InternalCalendar } from '#src/common/components/date-time-picker/calendar';

export type DateTimePickerCalendarProps<T extends DateValue> = Omit<
  ComponentPropsWithRef<typeof InternalCalendar<T>>,
  'children'
>;

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
