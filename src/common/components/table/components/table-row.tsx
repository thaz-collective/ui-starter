import type { RowProps as RACRowProps } from 'react-aria-components';
import { composeRenderProps, Row as RACRow } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export type RowProps<T extends object> = RACRowProps<T>;

export function Row<T extends object>(props: RowProps<T>) {
  const { row } = tableVariants();

  return (
    <RACRow
      {...props}
      data-slot="row"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return row({ ...renderProps, className });
      })}
    />
  );
}
