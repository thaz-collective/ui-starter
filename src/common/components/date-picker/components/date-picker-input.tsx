import { composeRenderProps } from 'react-aria-components';

import type { DateInputProps as InternalDateInputProps } from '#src/common/components/date-input';
import { DateInput as InternalDateInput } from '#src/common/components/date-input';
import { useDatePickerContext } from '#src/common/components/date-picker/context';

export function Input(props: InternalDateInputProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker.Input must be used within a component that extends a DatePickerContextProvider');
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
