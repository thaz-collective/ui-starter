import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { TableBody as RACTableBody, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const bodyVariants = tv({
  base: ['[&_tr:last-child]:border-0'],
});

type TableBodyProps<T> = SetRequired<ComponentPropsWithRef<typeof RACTableBody<T>>, 'children'> &
  VariantProps<typeof bodyVariants>;

export function TableBody<T>(props: TableBodyProps<T>) {
  return (
    <RACTableBody
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return bodyVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
