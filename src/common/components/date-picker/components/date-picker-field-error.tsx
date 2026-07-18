import { composeRenderProps } from 'react-aria-components';

import type { FieldErrorProps as InternalFieldErrorProps } from '#src/common/components/field-error';
import { useDatePickerContext } from '#src/common/components/date-picker/context';
import { FieldError as InternalFieldError } from '#src/common/components/field-error';

export function FieldError(props: InternalFieldErrorProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker.FieldError must be used within a component that extends a DatePickerContextProvider');
  }

  const { slots } = context;

  return (
    <InternalFieldError
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.fieldError({ ...props, ...renderProps, className });
      })}
    />
  );
}
