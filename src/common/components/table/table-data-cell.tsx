import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Cell as RACCell, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const cellVariants = tv({
  base: [
    'p-2 align-middle -outline-offset-2',
    'data-focus-visible:outline-ring',
    '[&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]',
  ],
});

type TableDataCellProps = SetRequired<ComponentPropsWithRef<typeof RACCell>, 'children'> &
  VariantProps<typeof cellVariants>;

export function TableDataCell(props: TableDataCellProps) {
  return (
    <RACCell
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return cellVariants({ ...renderProps, className });
      })}
    />
  );
}
