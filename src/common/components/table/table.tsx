import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Table as RACTable, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const tableVariants = tv({
  base: ['w-full caption-bottom text-sm -outline-offset-2', 'data-focus-visible:outline-ring'],
});

type TableProps = SetRequired<ComponentPropsWithRef<typeof RACTable>, 'children'> & VariantProps<typeof tableVariants>;

export function Table(props: TableProps) {
  return (
    <RACTable
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return tableVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
