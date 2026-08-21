import type { ComponentProps } from 'react';

import { Cell as RACCell, composeRenderProps } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableDataCellProps = ComponentProps<typeof RACCell>;

export function TableDataCell(props: TableDataCellProps) {
  const { cell } = tableVariants();

  return (
    <RACCell
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return cell({ ...renderProps, className });
      })}
    />
  );
}
