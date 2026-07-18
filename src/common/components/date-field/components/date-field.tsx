import type { ReactNode } from 'react';

import type { DateFieldProps as RACDateFieldProps, DateValue } from 'react-aria-components';
import { composeRenderProps, DateField as RACDateField } from 'react-aria-components';

import type { DateFieldVariants } from '#src/common/components/date-field/variants';
import { useDateFieldContext } from '#src/common/components/date-field/context';

import { DateFieldContextProvider } from './date-field-context-provider';

export interface DateFieldProps<T extends DateValue> extends RACDateFieldProps<T>, DateFieldVariants {
  children: ReactNode;
}

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  return (
    <DateFieldContextProvider {...props}>
      <DateFieldInner {...props} />
    </DateFieldContextProvider>
  );
}

function DateFieldInner<T extends DateValue>(props: DateFieldProps<T>) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField must be used within a component that extends a DateFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACDateField
      data-slot="date-field"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
