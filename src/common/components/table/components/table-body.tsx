import type { ComponentProps } from 'react';

import { composeRenderProps, TableBody as RACTableBody } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableBodyProps<T> = ComponentProps<typeof RACTableBody<T>>;

export function TableBody<T>(props: TableBodyProps<T>) {
  const { body } = tableVariants();

  return (
    <RACTableBody
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return body({ ...renderProps, className });
      })}
    />
  );
}
