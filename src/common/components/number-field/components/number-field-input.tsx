import { composeRenderProps } from 'react-aria-components';

import type { InputRootProps as InternalInputProps } from '#src/common/components/input';
import { Input as InternalInput } from '#src/common/components/input';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

export function Input(props: InternalInputProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField.Input must be used within a component that extends a NumberFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.input({ ...props, ...renderProps, className });
      })}
    />
  );
}
