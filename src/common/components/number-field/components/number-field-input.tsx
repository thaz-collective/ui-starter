import type { InputProps as RACInputProps } from 'react-aria-components';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useNumberFieldContext } from '#src/common/components/number-field/context';

const inputVariants = tv({
  base: [
    'min-w-0 flex-1',
    'px-3 pt-5 pb-1.5',
    'leading-none',
    'bg-transparent',
    'text-sm text-foreground',
    'border-0 outline-none',
    'placeholder:text-muted-foreground/50',
    'placeholder:opacity-0',
    'placeholder:transition-opacity placeholder:duration-150',
    'data-[disabled="true"]:cursor-not-allowed',
    'data-[disabled="true"]:text-muted-foreground',
    'data-[readonly="true"]:cursor-default',
  ],
});

export type InputRootProps = RACInputProps;

export function Input(props: InputRootProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField.Input must be used within a component that extends a NumberFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACInput
      {...props}
      data-slot="input"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const slotClassName = slots.input({ ...props, ...renderProps, className });

        return inputVariants({ ...props, ...renderProps, className: slotClassName });
      })}
    />
  );
}
