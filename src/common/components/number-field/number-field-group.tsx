import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const groupVariants = tv({
  base: ['flex w-full items-stretch'],
});

export type NumberFieldGroupProps = ComponentPropsWithRef<typeof RACGroup>;

export function NumberFieldGroup(props: NumberFieldGroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return groupVariants({ ...renderProps, className });
      })}
    />
  );
}
