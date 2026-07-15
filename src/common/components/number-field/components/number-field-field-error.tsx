import { composeRenderProps } from 'react-aria-components';

import type { FieldErrorProps as InternalFieldErrorProps } from '#src/common/components/field-error';
import { FieldError as InternalFieldError } from '#src/common/components/field-error';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

export function FieldError(props: InternalFieldErrorProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField.FieldError must be used within a component that extends a NumberFieldContextProvider');
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
