import type { ComponentProps } from 'react';

import { Column as RACColumn, composeRenderProps } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

type TableColumnProps = ComponentProps<typeof RACColumn>;

export function TableColumn(props: TableColumnProps) {
  const { column } = tableVariants();

  return (
    <RACColumn
      {...props}
      className={composeRenderProps(props.className, (composedClassName, renderProps) => {
        return column({ ...renderProps, className: composedClassName });
      })}
    />
  );
}
