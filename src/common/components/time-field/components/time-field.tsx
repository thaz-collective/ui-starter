import type { ReactNode } from 'react';

import type { TimeFieldProps as RACTimeFieldProps, TimeValue } from 'react-aria-components';
import { composeRenderProps, TimeField as RACTimeField } from 'react-aria-components';

import type { TimeFieldVariants } from '#src/common/components/time-field/variants';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

import { TimeFieldContextProvider } from './time-field-context-provider';

export interface TimeFieldProps<T extends TimeValue> extends RACTimeFieldProps<T>, TimeFieldVariants {
  children: ReactNode;
}

export function TimeField<T extends TimeValue>(props: TimeFieldProps<T>) {
  return (
    <TimeFieldContextProvider {...props}>
      <TimeFieldInner {...props} />
    </TimeFieldContextProvider>
  );
}

function TimeFieldInner<T extends TimeValue>(props: TimeFieldProps<T>) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField must be used within a component that extends a TimeFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACTimeField
      data-slot="time-field"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
