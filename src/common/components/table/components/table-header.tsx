import type { TableHeaderProps as RACTableHeaderProps } from 'react-aria-components';
import { composeRenderProps, TableHeader as RACTableHeader } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export type HeaderProps<T extends object> = RACTableHeaderProps<T>;

export function Header<T extends object>(props: HeaderProps<T>) {
  const { header } = tableVariants();

  return (
    <RACTableHeader
      {...props}
      data-slot="table-header"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return header({ ...renderProps, className });
      })}
    />
  );
}
