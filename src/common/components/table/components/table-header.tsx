import type { ComponentProps } from 'react';

import { composeRenderProps, TableHeader as RACTableHeader } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableHeaderProps<T> = ComponentProps<typeof RACTableHeader<T>>;

export function TableHeader<T>(props: TableHeaderProps<T>) {
  const { header } = tableVariants();

  return (
    <RACTableHeader
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return header({ ...renderProps, className });
      })}
    />
  );
}
