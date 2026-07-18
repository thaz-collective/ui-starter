import { composeRenderProps } from 'react-aria-components';

import type { FieldErrorProps as InternalFieldErrorProps } from '#src/common/components/field-error';
import { useDateFieldContext } from '#src/common/components/date-field/context';
import { FieldError as InternalFieldError } from '#src/common/components/field-error';

export function FieldError(props: InternalFieldErrorProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField.FieldError must be used within a component that extends a DateFieldContextProvider');
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
