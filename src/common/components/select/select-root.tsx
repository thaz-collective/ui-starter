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

type SelectionMode = 'single' | 'multiple';

type SelectRootProps<T extends object, M extends SelectionMode = 'single'> = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACSelect<T, M>>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
> &
  VariantProps<typeof selectVariants>;

export function SelectRoot<T extends object, M extends SelectionMode = 'single'>(props: SelectRootProps<T, M>) {
  return (
    <RACSelect
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return selectVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
