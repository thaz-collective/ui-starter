import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';
import { tv } from 'tailwind-variants';

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

    'group-focus-within/label-input-container:placeholder:opacity-100',
  ],
});

type InputProps = ComponentPropsWithRef<typeof RACInput> & VariantProps<typeof inputVariants>;

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return inputVariants({ ...props, ...renderProps, className: className });
      })}
    />
  );
}
