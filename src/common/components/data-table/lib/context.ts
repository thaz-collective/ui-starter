import { createTableHookContexts } from '@tanstack/react-table';

import type { DataTableFeatures } from './features';

export const { tableContext, headerContext, cellContext, useTableContext, useHeaderContext, useCellContext } =
  createTableHookContexts<DataTableFeatures>();
