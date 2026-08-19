import type { CellProps as RACCellProps } from 'react-aria-components';
import { Cell as RACCell, composeRenderProps } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export type CellProps = RACCellProps;

export function Cell(props: CellProps) {
  const { cell } = tableVariants();

  return (
    <RACCell
      {...props}
      data-slot="cell"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return cell({ ...renderProps, className });
      })}
    />
  );
}
