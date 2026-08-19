import type { ReactNode } from 'react';

import { dataTableVariants } from '#src/common/components/data-table/variants';

export interface DataTableToolbarProps {
  search?: ReactNode;
  children?: ReactNode;
}

// Layout-only container: search input on the left, filter/other actions on the
// right. Consumers compose `DataTableSearch`/`DataTableFilterList`/their own
// pieces as children — this isn't a compound `Root` since a table integration's
// "root" is `useAppTable(...)`, not this toolbar (see `plans/tanstack-react-table-integration.md`).
export function DataTableToolbar(props: DataTableToolbarProps) {
  const { toolbar, toolbarActions } = dataTableVariants();

  return (
    <div className={toolbar()}>
      {props.search}
      <div className={toolbarActions()}>{props.children}</div>
    </div>
  );
}
