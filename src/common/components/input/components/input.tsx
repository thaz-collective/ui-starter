import type { InputProps as RACInputProps } from 'react-aria-components';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';

import { inputVariants } from '#src/common/components/input/variants';

export type InputRootProps = RACInputProps;

export function Input(props: InputRootProps) {
  return (
    <RACInput
      {...props}
      data-slot="input"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return inputVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
