import { ChevronDown, ChevronUp, ChevronsUpDown, EyeOff } from 'lucide-react';
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';

import { useDataTableHeaderContext, useDataTableTableContext } from '#src/common/components/data-table/lib/context';
import { dataTableVariants } from '#src/common/components/data-table/variants';

export interface DataTableColumnHeaderProps {
  title?: string;
}

function SortIcon(props: { direction: false | 'asc' | 'desc' }) {
  if (props.direction === 'asc') {
    return <ChevronUp className="size-3.5" />;
  }

  if (props.direction === 'desc') {
    return <ChevronDown className="size-3.5" />;
  }

  return <ChevronsUpDown className="size-3.5 text-muted-foreground" />;
}

// Registered as `headerComponents.ColumnHeader` by `createDataTable` — reads the
// active header/table via context (`useDataTableHeaderContext`/
// `useDataTableTableContext`) rather than props, per v9's context-based
// cell/header component convention (see `createTableHook`'s doc comment).
export function DataTableColumnHeader(props: DataTableColumnHeaderProps) {
  const header = useDataTableHeaderContext();
  const table = useDataTableTableContext();
  const { column } = header;

  const { columnHeaderButton, columnHeaderMenuButton } = dataTableVariants();

  // `columnDef.meta` is already typed as `DataTableColumnMeta` via the
  // `columnMeta: metaHelper<DataTableColumnMeta>()` slot registered in
  // `lib/features.ts` — no cast needed, it flows through `TFeatures`.
  const { meta } = column.columnDef;
  const displayTitle = meta?.label ?? props.title ?? column.id;

  const canSort = column.getCanSort();
  const canHide = column.getCanHide();

  if (!canSort && !canHide) {
    return <span className="font-medium">{displayTitle}</span>;
  }

  return (
    <table.Subscribe selector={(state) => ({ sorting: state.sorting })}>
      {() => {
        let sorted: false | 'asc' | 'desc' = false;

        if (canSort) {
          sorted = column.getIsSorted();
        }

        return (
          <div className="flex min-w-0 items-center gap-1">
            <ColumnSortButton
              canSort={canSort}
              sorted={sorted}
              displayTitle={displayTitle}
              onToggle={() => {
                column.toggleSorting();
              }}
              buttonClassName={columnHeaderButton()}
            />
            {canHide && (
              <MenuTrigger>
                <Button
                  aria-label={`${displayTitle} column menu`}
                  className={columnHeaderMenuButton()}
                >
                  <EyeOff className="size-3.5" />
                </Button>
                <Popover>
                  <Menu>
                    <MenuItem
                      id="hide"
                      onAction={() => {
                        column.toggleVisibility(false);
                      }}
                    >
                      {'Hide column'}
                    </MenuItem>
                  </Menu>
                </Popover>
              </MenuTrigger>
            )}
          </div>
        );
      }}
    </table.Subscribe>
  );
}

function ColumnSortButton(props: {
  canSort: boolean;
  sorted: false | 'asc' | 'desc';
  displayTitle: string;
  onToggle: () => void;
  buttonClassName: string;
}) {
  if (!props.canSort) {
    return <span className="truncate font-medium">{props.displayTitle}</span>;
  }

  return (
    <Button
      className={props.buttonClassName}
      onPress={props.onToggle}
    >
      <span className="truncate">{props.displayTitle}</span>
      <SortIcon direction={props.sorted} />
    </Button>
  );
}
