import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { TableHeader as RACTableHeader, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const headerVariants = tv({
  base: ['[&_tr]:border-b'],
});

type TableHeaderProps<T> = SetRequired<ComponentPropsWithRef<typeof RACTableHeader<T>>, 'children'> &
  VariantProps<typeof headerVariants>;

export function TableHeader<T>(props: TableHeaderProps<T>) {
  return (
    <RACTableHeader
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return headerVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
