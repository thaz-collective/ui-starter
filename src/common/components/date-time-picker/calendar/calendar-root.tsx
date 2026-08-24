import type { ComponentPropsWithRef } from 'react';

import type { DateValue } from 'react-aria-components';
import type { SetRequired } from 'type-fest';
import { Calendar as RACCalendar, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const calendarVariants = tv({
  base: ['group/calendar', 'flex flex-col gap-2'],
});

export type CalendarRootProps<T extends DateValue> = SetRequired<
  ComponentPropsWithRef<typeof RACCalendar<T>>,
  'children'
>;

export function CalendarRoot<T extends DateValue>(props: CalendarRootProps<T>) {
  return (
    <RACCalendar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return calendarVariants({ ...renderProps, className });
      })}
    />
  );
}
