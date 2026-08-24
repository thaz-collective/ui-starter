import { Table as TableRoot } from './table';
import { TableBody } from './table-body';
import { TableColumn } from './table-column';
import { TableDataCell } from './table-data-cell';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableDataCell,
});
