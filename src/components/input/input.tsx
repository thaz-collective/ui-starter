import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type InputProps = SetRequired<ComponentPropsWithRef<typeof RACInput>, 'placeholder'>;

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/input min-w-0 flex-1 border-0 bg-transparent px-3 pt-5 pb-1.5 text-sm leading-none text-field-foreground outline-none',

            'placeholder:text-field-foreground/50 placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-150',

            'data-[disabled="true"]:cursor-not-allowed data-[disabled="true"]:text-muted-foreground',

            'data-[readonly="true"]:cursor-default',

            'group-focus-within/field-container:placeholder:opacity-100',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
