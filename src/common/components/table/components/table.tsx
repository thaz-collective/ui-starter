import type { ComponentProps } from 'react';

import { composeRenderProps, Table as RACTable } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableProps = ComponentProps<typeof RACTable>;

export function Table(props: TableProps) {
  const { root } = tableVariants();

  return (
    <RACTable
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return root({ ...renderProps, className });
      })}
    />
  );
}
