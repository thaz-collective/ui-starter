import type { ColumnProps as RACColumnProps } from 'react-aria-components';
import { ChevronsUpDown } from 'lucide-react';
import { Column as RACColumn, ColumnResizer, composeRenderProps, Group } from 'react-aria-components';

import { tableVariants } from '#src/common/components/table/variants';

export interface ColumnProps extends RACColumnProps {
  isResizable?: boolean;
}

export function Column(props: ColumnProps) {
  const { column, columnGroup, columnGroupSortable, columnResizer } = tableVariants();

  const { children, className, isResizable, ...rest } = props;

  return (
    <RACColumn
      {...rest}
      data-slot="column"
      className={composeRenderProps(className, (composedClassName, renderProps) => {
        return column({ ...renderProps, className: composedClassName });
      })}
    >
      {composeRenderProps(children, (renderedChildren, { allowsSorting }) => {
        let groupClassName: string | undefined;

        if (allowsSorting) {
          groupClassName = columnGroupSortable();
        }

        return (
          <div className="flex items-center">
            <Group
              role="presentation"
              tabIndex={-1}
              className={columnGroup({ className: groupClassName })}
            >
              <span className="truncate">{renderedChildren}</span>
              {allowsSorting && <ChevronsUpDown className="ml-2 size-4" />}
            </Group>
            {isResizable && <ColumnResizer className={columnResizer()} />}
          </div>
        );
      })}
    </RACColumn>
  );
}
