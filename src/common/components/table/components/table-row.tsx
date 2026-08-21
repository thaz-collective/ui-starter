import type { ComponentProps } from 'react';

import { composeRenderProps, Row as RACRow } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableRowProps<T> = ComponentProps<typeof RACRow<T>>;

export function TableRow<T>(props: TableRowProps<T>) {
  const { row } = tableVariants();

  return (
    <RACRow
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return row({ ...renderProps, className });
      })}
    />
  );
}
