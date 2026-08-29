// import { useMemo, useState } from 'react';
//
// import { createDataTable, DataTableSearch, getColumnSizeVars } from '#src/common/components/data-table';
// import { Table } from '#src/common/components/table';
//
// interface Person {
//   id: string;
//   name: string;
//   email: string;
//   role: 'admin' | 'editor' | 'viewer';
// }
//
// const data: Person[] = [
//   { id: '1', name: 'Ava Thompson', email: 'ava@example.com', role: 'admin' },
//   { id: '2', name: 'Noah Martinez', email: 'noah@example.com', role: 'editor' },
//   { id: '3', name: 'Mia Chen', email: 'mia@example.com', role: 'viewer' },
//   { id: '4', name: 'Liam Patel', email: 'liam@example.com', role: 'editor' },
//   { id: '5', name: 'Sofia Rossi', email: 'sofia@example.com', role: 'viewer' },
// ];
//
// // Call `createDataTable()` once per distinct table shape (module scope in a real
// // app) — it's a factory, not a component, so it lives outside the component below.
// const { useAppTable, createAppColumnHelper } = createDataTable();
//
// const columnHelper = createAppColumnHelper<Person>();
//
// const columns = columnHelper.columns([
//   columnHelper.display({
//     id: 'select',
//     header: ({ header }) => <header.SelectAllHeader />,
//     cell: ({ cell }) => <cell.SelectCell />,
//     size: 40,
//     minSize: 40,
//     maxSize: 40,
//     enableSorting: false,
//     enableHiding: false,
//     enableResizing: false,
//   }),
//   columnHelper.accessor('name', {
//     id: 'name',
//     header: ({ header }) => <header.ColumnHeader />,
//     meta: { label: 'Name', variant: 'text' },
//   }),
//   columnHelper.accessor('email', {
//     id: 'email',
//     header: ({ header }) => <header.ColumnHeader />,
//     meta: { label: 'Email', variant: 'text' },
//     enableSorting: false,
//   }),
//   columnHelper.accessor('role', {
//     id: 'role',
//     header: ({ header }) => <header.ColumnHeader />,
//     meta: {
//       label: 'Role',
//       variant: 'select',
//       options: [
//         { label: 'Admin', value: 'admin' },
//         { label: 'Editor', value: 'editor' },
//         { label: 'Viewer', value: 'viewer' },
//       ],
//     },
//   }),
// ]);
//
// export function DataTableDemo() {
//   const [globalFilter, setGlobalFilter] = useState('');
//
//   const table = useAppTable({
//     key: 'data-table-demo',
//     columns,
//     data,
//     state: { globalFilter },
//     onGlobalFilterChange: setGlobalFilter,
//   });
//
//   const columnSizeVars = useMemo(() => getColumnSizeVars(table), [table]);
//
//   return (
//     <table.AppTable>
//       <div className="flex w-full flex-col gap-3">
//         <DataTableSearch
//           value={globalFilter}
//           onChange={setGlobalFilter}
//           className="w-full max-w-xs rounded-md border border-field-border bg-field px-3 py-1.5 text-sm outline-none"
//         />
//         <Table.ResizableContainer className="w-full overflow-auto rounded-md border border-foreground/15">
//           <Table
//             aria-label="People"
//             style={{ ...columnSizeVars, width: '100%' }}
//           >
//             <Table.Header>
//               {table.getHeaderGroups()[0]?.headers.map((header) => (
//                 <Table.Column
//                   key={header.id}
//                   id={header.id}
//                   allowsSorting={header.column.getCanSort()}
//                   isResizable={header.column.getCanResize()}
//                   style={{ width: `calc(var(--header-${header.id}-size) * 1px)` }}
//                 >
//                   <table.AppHeader header={header}>{(h) => <h.FlexRender />}</table.AppHeader>
//                 </Table.Column>
//               ))}
//             </Table.Header>
//             <Table.Body items={table.getRowModel().rows}>
//               {(row) => (
//                 <Table.Row
//                   key={row.id}
//                   id={row.id}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <Table.Cell
//                       key={cell.id}
//                       style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}
//                     >
//                       <table.AppCell cell={cell}>{(c) => <c.FlexRender />}</table.AppCell>
//                     </Table.Cell>
//                   ))}
//                 </Table.Row>
//               )}
//             </Table.Body>
//           </Table>
//         </Table.ResizableContainer>
//       </div>
//     </table.AppTable>
//   );
// }
