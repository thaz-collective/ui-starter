import { useState } from 'react';

import type { Selection } from 'react-aria-components';

import { Table } from '#src/common/components/table';

const rows = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
  { id: 2, name: 'Grace Hopper', role: 'Engineer', status: 'Active' },
  { id: 3, name: 'Alan Turing', role: 'Researcher', status: 'Invited' },
];

export function TableWithSelectionExample() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  return (
    <Table
      aria-label="Team members"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <Table.TableHeader>
        <Table.TableColumn isRowHeader={true}>{'Name'}</Table.TableColumn>
        <Table.TableColumn>{'Role'}</Table.TableColumn>
        <Table.TableColumn>{'Status'}</Table.TableColumn>
      </Table.TableHeader>
      <Table.TableBody items={rows}>
        {(row) => (
          <Table.TableRow>
            <Table.TableDataCell>{row.name}</Table.TableDataCell>
            <Table.TableDataCell>{row.role}</Table.TableDataCell>
            <Table.TableDataCell>{row.status}</Table.TableDataCell>
          </Table.TableRow>
        )}
      </Table.TableBody>
    </Table>
  );
}
