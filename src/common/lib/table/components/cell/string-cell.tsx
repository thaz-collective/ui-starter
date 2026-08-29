import { useCellContext } from '#src/common/lib/table/lib/context';

export function StringCell() {
  const cell = useCellContext<string | null | undefined>();
  const value = cell.getValue();

  if (value === null || value === undefined) {
    return null;
  }

  return <span className="block min-w-0 truncate">{value}</span>;
}
