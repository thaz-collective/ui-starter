import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Row as RACRow, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const rowVariants = tv({
  base: [
    'border-b -outline-offset-2 transition-colors',
    'data-hovered:bg-muted/50',
    'data-selected:bg-muted',
    'data-focus-visible:outline-ring',
  ],
});

type TableRowProps<T> = SetRequired<ComponentPropsWithRef<typeof RACRow<T>>, 'children'> &
  VariantProps<typeof rowVariants>;

export function TableRow<T>(props: TableRowProps<T>) {
  return (
    <RACRow
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return rowVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
