import type { ReactNode } from 'react';

import type { DatePickerProps as RACDatePickerProps, DateValue } from 'react-aria-components';
import { composeRenderProps, DatePicker as RACDatePicker } from 'react-aria-components';

import type { DateTimePickerVariants } from '#src/common/components/date-time-picker/variants';
import { useDateTimePickerContext } from '#src/common/components/date-time-picker/context';

import { DateTimePickerContextProvider } from './date-time-picker-context-provider';

export interface DateTimePickerProps<T extends DateValue> extends RACDatePickerProps<T>, DateTimePickerVariants {
  children: ReactNode;
}

export function DateTimePicker<T extends DateValue>(props: DateTimePickerProps<T>) {
  return (
    <DateTimePickerContextProvider {...props}>
      <DateTimePickerInner {...props} />
    </DateTimePickerContextProvider>
  );
}

function DateTimePickerInner<T extends DateValue>(props: DateTimePickerProps<T>) {
  const context = useDateTimePickerContext();

  if (context === undefined) {
    throw new Error('DateTimePicker must be used within a component that extends a DateTimePickerContextProvider');
  }

  const { slots } = context;

  return (
    <RACDatePicker
      data-slot="date-time-picker"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
