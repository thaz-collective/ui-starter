import type { InputProps as RACInputProps } from 'react-aria-components';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type InputProps = RACInputProps;

export function Input(props: InputProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.Input must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACInput
      {...props}
      data-slot="input"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.input({ ...props, ...renderProps, className });
      })}
    />
  );
}
