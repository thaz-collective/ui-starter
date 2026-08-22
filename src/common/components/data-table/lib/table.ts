import { createTableHook } from '@tanstack/react-table';

import { StringCell } from '#src/common/components/data-table/components/cell/string-cell';
import { TemporalCell } from '#src/common/components/data-table/components/cell/temporal-cell';

// import { HeaderStringFilter } from '#src/common/components/data-table/components/data-table-string-filter';
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
    // defaultColumn: { filterFn: dynamicFilterFn },
    tableComponents: {},
    headerComponents: {
      // HeaderStringFilter,
    },
    cellComponents: {
      StringCell,
      TemporalCell,
    },
  });
