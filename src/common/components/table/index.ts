import { Table as TableRoot } from './components/table';
import { TableBody } from './components/table-body';
import { TableColumn } from './components/table-column';
import { TableDataCell } from './components/table-data-cell';
import { TableHeader } from './components/table-header';
import { TableRow } from './components/table-row';

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableDataCell,
});
