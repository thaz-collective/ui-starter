import { composeRenderProps } from 'react-aria-components';

import type { DateInputProps as InternalDateInputProps } from '#src/common/components/date-input';
import { useDateFieldContext } from '#src/common/components/date-field/context';
import { DateInput as InternalDateInput } from '#src/common/components/date-input';

export function Input(props: InternalDateInputProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField.Input must be used within a component that extends a DateFieldContextProvider');
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
