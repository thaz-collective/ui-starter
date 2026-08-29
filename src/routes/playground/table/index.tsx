import { useMemo } from 'react';

import { createFileRoute } from '@tanstack/react-router';
import { useTanStackTableDevtools } from '@tanstack/react-table-devtools';

import { Table } from '#src/common/components/table';
import { getColumnSizeVars } from '#src/common/lib/table/lib/column-size-vars';
import { createAppColumnHelper, useAppTable } from '#src/common/lib/table/lib/table';

export const Route = createFileRoute('/playground/table/')({
  component: RouteComponent,
});

interface Person {
  id: string;
  name: string;
  email: string;
  age: number;
}

const data: Person[] = [
  { id: '1', name: 'Ava Thompson', email: 'ava@example.com', age: 34 },
  { id: '2', name: 'Noah Martinez', email: 'noah@example.com', age: 28 },
  { id: '3', name: 'Mia Chen', email: 'mia@example.com', age: 41 },
  { id: '4', name: 'Liam Patel', email: 'liam@example.com', age: 25 },
  { id: '5', name: 'Sofia Rossi', email: 'sofia@example.com', age: 37 },
];

const columnHelper = createAppColumnHelper<Person>();

const columns = columnHelper.columns([
  columnHelper.accessor('name', {
    id: 'name',
    meta: { label: 'Name', variant: 'string' },
  }),
  columnHelper.accessor('age', {
    id: 'age',
    meta: { label: 'Age', variant: 'number' },
  }),
  columnHelper.accessor('email', {
    id: 'email',
    meta: { label: 'Email', variant: 'string' },
    enableSorting: false,
    enableColumnFilter: false,
  }),
]);

function RouteComponent() {
  const table = useAppTable({
    getRowId: (originalRow) => originalRow.id,
    columns,
    data,
  });

  useTanStackTableDevtools(table);

  const columnSizeVars = useMemo(() => getColumnSizeVars(table), [table]);

  return (
    <table.AppTable>
      <div className="flex w-full flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{'Table Playground'}</h1>
          <table.DynamicGlobalFilter />
        </div>
        <div className="w-full overflow-auto rounded-md border border-foreground/15">
          <Table
            aria-label="People"
            style={{ ...columnSizeVars, width: '100%' }}
          >
            <Table.TableHeader>
              {table.getHeaderGroups()[0]?.headers.map((header) => (
                <Table.TableColumn
                  key={header.id}
                  id={header.id}
                  isRowHeader={header.id === 'name'}
                  allowsSorting={false}
                  style={{ width: `calc(var(--header-${header.id}-size) * 1px)` }}
                >
                  <table.AppHeader header={header}>{(h) => <h.FlexRender />}</table.AppHeader>
                </Table.TableColumn>
              ))}
            </Table.TableHeader>
            <Table.TableBody items={table.getRowModel().rows}>
              {(row) => (
                <Table.TableRow
                  key={row.id}
                  id={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.TableDataCell
                      key={cell.id}
                      style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}
                    >
                      <table.AppCell cell={cell}>{(c) => <c.FlexRender />}</table.AppCell>
                    </Table.TableDataCell>
                  ))}
                </Table.TableRow>
              )}
            </Table.TableBody>
          </Table>
        </div>
      </div>
    </table.AppTable>
  );
}
