import type { InputProps as RACInputProps } from 'react-aria-components';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useSearchFieldContext } from '#src/common/components/search-field/context';

const inputVariants = tv({
  base: [
    'min-w-0 flex-1',
    'px-2 py-2',
    'leading-none',
    'bg-transparent',
    'text-sm text-foreground',
    'border-0 outline-none',
    'placeholder:text-muted-foreground/50',
    'data-[disabled="true"]:cursor-not-allowed',
    'data-[disabled="true"]:text-muted-foreground',
    'data-[readonly="true"]:cursor-default',
    '[&::-webkit-search-cancel-button]:hidden',
  ],
});

export type SearchFieldInputProps = RACInputProps;

export function Input(props: SearchFieldInputProps) {
  const context = useSearchFieldContext();

  if (context === undefined) {
    throw new Error('SearchField.Input must be used within a component that extends a SearchFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACInput
      {...props}
      data-slot="input"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const slotClassName = slots.input({ ...props, ...renderProps, className });

        return inputVariants({ className: slotClassName });
      })}
    />
  );
}
