export interface PropsTableRow {
  name: string;
  type: string;
  default?: string;
}

export interface PropsTableProps {
  rows: PropsTableRow[];
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-foreground/15">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted text-left">
          <tr>
            <th className="p-3 font-medium">{'Prop'}</th>
            <th className="p-3 font-medium">{'Type'}</th>
            <th className="p-3 font-medium">{'Default'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-t border-foreground/15"
            >
              <td className="p-3 font-mono text-xs">{row.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{row.type}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{row.default ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
