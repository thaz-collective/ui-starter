import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, NumberField as RACNumberField } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const numberFieldVariants = tv({
  base: [
    'group/number-field',

    'relative inline-flex flex-col',

    'm-0 w-full min-w-0 border-0 p-0',

    'gap-1',
  ],
});

type NumberFieldRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACNumberField>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
> &
  VariantProps<typeof numberFieldVariants>;

export function NumberFieldRoot(props: NumberFieldRootProps) {
  return (
    <RACNumberField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return numberFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
