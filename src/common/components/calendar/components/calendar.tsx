import type { ReactNode } from 'react';

import type { CalendarProps as RACCalendarProps, DateValue } from 'react-aria-components';
import { Calendar as RACCalendar, composeRenderProps } from 'react-aria-components';

import type { CalendarVariants } from '#src/common/components/calendar/variants';
import { useCalendarContext } from '#src/common/components/calendar/context';

import { CalendarContextProvider } from './calendar-context-provider';

export interface CalendarProps<T extends DateValue> extends RACCalendarProps<T>, CalendarVariants {
  children: ReactNode;
}

export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
  return (
    <CalendarContextProvider {...props}>
      <CalendarInner {...props} />
    </CalendarContextProvider>
  );
}

function CalendarInner<T extends DateValue>(props: CalendarProps<T>) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('Calendar must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <RACCalendar
      data-slot="calendar"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
