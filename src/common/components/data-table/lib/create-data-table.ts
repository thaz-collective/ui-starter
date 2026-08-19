import type { ComponentType } from 'react';

import type { CreateTableHookOptions } from '@tanstack/react-table';
import { createTableHook } from '@tanstack/react-table';

import type { DataTableFeatures } from '#src/common/components/data-table/lib/features';
import { DataTableColumnHeader } from '#src/common/components/data-table/components/data-table-column-header';
import { DataTableSelectAllHeader } from '#src/common/components/data-table/components/data-table-select-all-header';
import { DataTableSelectCell } from '#src/common/components/data-table/components/data-table-select-cell';
import {
  dataTableTableContext,
  dataTableCellContext,
  dataTableHeaderContext,
} from '#src/common/components/data-table/lib/context';
import { dataTableFeatures } from '#src/common/components/data-table/lib/features';
import { dynamicFilterFn } from '#src/common/components/data-table/lib/filter-fns';

interface BuiltInCellComponents {
  SelectCell: typeof DataTableSelectCell;
}

interface BuiltInHeaderComponents {
  ColumnHeader: typeof DataTableColumnHeader;
  SelectAllHeader: typeof DataTableSelectAllHeader;
}

export type CreateDataTableOptions<
  TTableComponents extends Record<string, ComponentType>,
  TCellComponents extends Record<string, ComponentType>,
  THeaderComponents extends Record<string, ComponentType>,
> = Omit<
  CreateTableHookOptions<DataTableFeatures, TTableComponents, TCellComponents, THeaderComponents>,
  'features' | 'tableContext' | 'cellContext' | 'headerContext'
>;

// Thin wrapper over `createTableHook`: registers this library's feature set +
// contexts + built-in `DataTableColumnHeader`/`DataTableSelectCell`/
// `DataTableSelectAllHeader` components once, and lets a consumer layer their own
// `tableComponents`/`cellComponents`/`headerComponents` on top. Call once per
// distinct table shape (module scope in the consuming app), same as the
// `createTableHook` docs recommend.
export function createDataTable<
  TTableComponents extends Record<string, ComponentType> = Record<string, ComponentType>,
  TCellComponents extends Record<string, ComponentType> = Record<string, ComponentType>,
  THeaderComponents extends Record<string, ComponentType> = Record<string, ComponentType>,
>(options?: CreateDataTableOptions<TTableComponents, TCellComponents, THeaderComponents>) {
  const { tableComponents, cellComponents, headerComponents, defaultColumn, ...rest } = options ?? {};

  // Merging a caller-supplied generic component map with this factory's
  // built-in components can't be proven structurally sound for an arbitrary
  // `TCellComponents`/`THeaderComponents` — the built-ins are always present
  // at runtime (spread after the caller's map, so they can't be overridden),
  // which is what the generic type parameter promises; the assertion just
  // tells TS what's already true.
  // oxlint-disable-next-line consistent-type-assertions, no-unsafe-type-assertion
  const resolvedCellComponents = {
    ...cellComponents,
    SelectCell: DataTableSelectCell,
  } as TCellComponents & BuiltInCellComponents;

  // oxlint-disable-next-line consistent-type-assertions, no-unsafe-type-assertion
  const resolvedHeaderComponents = {
    ...headerComponents,
    ColumnHeader: DataTableColumnHeader,
    SelectAllHeader: DataTableSelectAllHeader,
  } as THeaderComponents & BuiltInHeaderComponents;

  return createTableHook({
    ...rest,
    features: dataTableFeatures,
    tableContext: dataTableTableContext,
    cellContext: dataTableCellContext,
    headerContext: dataTableHeaderContext,
    columnResizeMode: rest.columnResizeMode ?? 'onChange',
    defaultColumn: { filterFn: dynamicFilterFn, ...defaultColumn },
    // oxlint-disable-next-line consistent-type-assertions, no-unsafe-type-assertion -- see comment above.
    tableComponents: tableComponents ?? ({} as TTableComponents),
    cellComponents: resolvedCellComponents,
    headerComponents: resolvedHeaderComponents,
  });
}
