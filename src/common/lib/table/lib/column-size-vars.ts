import type { CSSProperties } from 'react';

import type { ReactTable, RowData } from '@tanstack/react-table';

import type { DataTableFeatures } from '#src/common/lib/table/lib/features';

// CSS-var-driven column sizing: table-core owns `header.getSize()`/`column.getSize()`
// as plain numbers, RAC's `Table` renders a real `<table>` (not a `display: grid`
// container), so per-cell widths are wired in as `--header-{id}-size`/
// `--col-{id}-size` custom properties consumed by each `Table.Column`/`Table.Cell`'s
// inline `style` (`width: calc(var(--col-x-size) * 1px)`) rather than passed as
// direct inline widths — confirmed pattern from kitchen-sink-react-aria's `main.tsx`.
// Call from a `useMemo` keyed on `table.state.columnSizing` (it changes on every
// resize frame in `columnResizeMode: 'onChange'`).
export function getColumnSizeVars<TData extends RowData>(table: ReactTable<DataTableFeatures, TData>): CSSProperties {
  const vars: Record<string, number> = {};

  for (const header of table.getFlatHeaders()) {
    vars[`--header-${header.id}-size`] = header.getSize();
    vars[`--col-${header.column.id}-size`] = header.column.getSize();
  }

  return vars;
}
