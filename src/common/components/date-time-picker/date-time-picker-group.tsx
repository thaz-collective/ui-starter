import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const groupVariants = tv({
  base: ['flex w-full items-stretch'],
});

export type DateTimePickerGroupProps = ComponentPropsWithRef<typeof RACGroup>;

export function DateTimePickerGroup(props: DateTimePickerGroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return groupVariants({ ...renderProps, className });
      })}
    />
  );
}
