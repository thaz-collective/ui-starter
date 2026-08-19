import type { TableBodyProps as RACTableBodyProps } from 'react-aria-components';
import { composeRenderProps, TableBody as RACTableBody } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export type BodyProps<T extends object> = RACTableBodyProps<T>;

export function Body<T extends object>(props: BodyProps<T>) {
  const { body } = tableVariants();

  return (
    <RACTableBody
      {...props}
      data-slot="table-body"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return body({ ...renderProps, className });
      })}
    />
  );
}
