import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, Select as RACSelect } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const selectVariants = tv({
  base: [
    'group/select',

    'relative inline-flex flex-col',

    'm-0 w-full min-w-0 border-0 p-0',

    'gap-1',
  ],
});

type SelectRootProps<T extends object> = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACSelect<T>>, 'defaultSelectedKey'>,
  'selectedKey' | 'onSelectionChange' | 'children'
> &
  VariantProps<typeof selectVariants>;

export function SelectRoot<T extends object>(props: SelectRootProps<T>) {
  return (
    <RACSelect
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return selectVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
