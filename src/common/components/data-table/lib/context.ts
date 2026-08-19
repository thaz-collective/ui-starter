import { createTableHookContexts } from '@tanstack/react-table';

import type { DataTableFeatures } from '#src/common/components/data-table/lib/features';

// `createTableHook` wires its `AppTable`/`AppCell`/`AppHeader` providers to a shared
// module-scoped context by default. `createDataTable` (see `./create-data-table`) is
// a *factory* a consumer may call more than once (one per distinct table shape), so
// instead of relying on that implicit per-package default this mints one explicit
// context set here and reuses it for every `createDataTable` call — this is what
// lets `DataTableColumnHeader`/`DataTableSelectCell`/`DataTableSelectAllHeader` (in
// `../components`) import `useDataTableTableContext`/`useDataTableHeaderContext`
// from this module directly, independent of which `createDataTable` call a given
// consumer ends up using. Kept in its own module (rather than inline in
// `create-data-table.ts`) so those components can import it without creating an
// import cycle with `create-data-table.ts` itself.
export const {
  tableContext: dataTableTableContext,
  cellContext: dataTableCellContext,
  headerContext: dataTableHeaderContext,
  useTableContext: useDataTableTableContext,
  useCellContext: useDataTableCellContext,
  useHeaderContext: useDataTableHeaderContext,
} = createTableHookContexts<DataTableFeatures>();
