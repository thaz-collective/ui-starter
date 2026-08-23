import { createTableHook } from '@tanstack/react-table';

import { StringCell } from '#src/common/components/data-table/components/cell/string-cell';
import { TemporalCell } from '#src/common/components/data-table/components/cell/temporal-cell';
import { DynamicGlobalFilter } from '#src/common/components/data-table/components/table/filter/global';

import { tableContext, cellContext, headerContext } from './context';
import { dynamicFilter } from './dynamic-filter/dynamic-filter-function';
import { dataTableFeatures } from './features';

export const { appFeatures, createAppColumnHelper, useAppTable, useHeaderContext, useTableContext, useCellContext } =
  createTableHook({
    features: dataTableFeatures,
    tableContext,
    cellContext,
    headerContext,
    defaultColumn: {
      filterFn: dynamicFilter,
    },
    columnResizeMode: 'onChange',
    tableComponents: {
      DynamicGlobalFilter,
    },
    headerComponents: {},
    cellComponents: {
      StringCell,
      TemporalCell,
    },
  });
