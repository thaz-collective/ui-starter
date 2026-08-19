import type { TableProps as RACTableProps } from 'react-aria-components';
import { composeRenderProps, Table as RACTable } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export type TableProps = RACTableProps;

export function Table(props: TableProps) {
  const { root } = tableVariants();

  return (
    <RACTable
      {...props}
      data-slot="table"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return root({ ...renderProps, className });
      })}
    />
  );
}
