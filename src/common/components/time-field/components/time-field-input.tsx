import { composeRenderProps } from 'react-aria-components';

import type { DateInputProps as InternalDateInputProps } from '#src/common/components/date-input';
import { DateInput as InternalDateInput } from '#src/common/components/date-input';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export function Input(props: InternalDateInputProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField.Input must be used within a component that extends a TimeFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalDateInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.input({ ...props, ...renderProps, className });
      })}
    />
  );
}
