import { composeRenderProps } from 'react-aria-components';

import type { InputRootProps as InternalInputProps } from '#src/common/components/input';
import { Input as InternalInput } from '#src/common/components/input';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function Input(props: InternalInputProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField.Input must be used within a component that extends a TextFieldContextProvider');
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
