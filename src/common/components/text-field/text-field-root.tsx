import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const textFieldVariants = tv({
  base: [
    'group/text-field',

    'relative inline-flex flex-col',

    'm-0 w-full min-w-0 border-0 p-0',

    'gap-1',
  ],
});

type TextFieldRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACTextField>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
> &
  VariantProps<typeof textFieldVariants>;

export function TextFieldRoot(props: TextFieldRootProps) {
  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return textFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
