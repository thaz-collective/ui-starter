import { composeRenderProps } from 'react-aria-components';

import type { FieldErrorProps as InternalFieldErrorProps } from '#src/common/components/field-error';
import { FieldError as InternalFieldError } from '#src/common/components/field-error';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function FieldError(props: InternalFieldErrorProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField.FieldError must be used within a component that extends a TextFieldContextProvider');
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
