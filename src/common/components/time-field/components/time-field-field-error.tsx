import { composeRenderProps } from 'react-aria-components';

import type { FieldErrorProps as InternalFieldErrorProps } from '#src/common/components/field-error';
import { FieldError as InternalFieldError } from '#src/common/components/field-error';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export function FieldError(props: InternalFieldErrorProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField.FieldError must be used within a component that extends a TimeFieldContextProvider');
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
