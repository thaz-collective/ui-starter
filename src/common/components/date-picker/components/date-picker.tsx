import type { ReactNode } from 'react';

import type { DatePickerProps as RACDatePickerProps, DateValue } from 'react-aria-components';
import { composeRenderProps, DatePicker as RACDatePicker } from 'react-aria-components';

import type { DatePickerVariants } from '#src/common/components/date-picker/variants';
import { useDatePickerContext } from '#src/common/components/date-picker/context';

import { DatePickerContextProvider } from './date-picker-context-provider';

export interface DatePickerProps<T extends DateValue> extends RACDatePickerProps<T>, DatePickerVariants {
  children: ReactNode;
}

export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  return (
    <DatePickerContextProvider {...props}>
      <DatePickerInner {...props} />
    </DatePickerContextProvider>
  );
}

function DatePickerInner<T extends DateValue>(props: DatePickerProps<T>) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker must be used within a component that extends a DatePickerContextProvider');
  }

  const { slots } = context;

  return (
    <RACDatePicker
      data-slot="date-picker"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
