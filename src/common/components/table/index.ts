import { Table as TableRoot } from './components/table';
import { Body } from './components/table-body';
import { Cell } from './components/table-cell';
import { Column } from './components/table-column';
import { Header } from './components/table-header';
import { ResizableContainer } from './components/table-resizable-container';
import { Row } from './components/table-row';

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Header,
  Column,
  Body,
  Row,
  Cell,
  ResizableContainer,
});

export type { TableProps } from './components/table';
export type { HeaderProps } from './components/table-header';
export type { ColumnProps } from './components/table-column';
export type { BodyProps } from './components/table-body';
export type { RowProps } from './components/table-row';
export type { CellProps } from './components/table-cell';
export type { ResizableContainerProps } from './components/table-resizable-container';

export type { TableVariants, SlotsTableVariants, RequiredTableVariants } from './variants';
export { tableVariants } from './variants';
