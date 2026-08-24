import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Column as RACColumn, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const columnVariants = tv({
  base: [
    'h-10 text-left align-middle font-medium text-muted-foreground -outline-offset-2',
    'data-focus-visible:outline-ring',
  ],
});

type TableColumnProps = SetRequired<ComponentPropsWithRef<typeof RACColumn>, 'children'> &
  VariantProps<typeof columnVariants>;

export function TableColumn(props: TableColumnProps) {
  return (
    <RACColumn
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return columnVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
