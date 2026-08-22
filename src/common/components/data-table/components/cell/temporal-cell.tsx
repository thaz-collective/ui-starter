import type { FormattableTemporal } from '@thaz/temporal-util';
import { formatTemporal } from '@thaz/temporal-util';

import { useCellContext } from '#src/common/components/data-table/lib/context';

interface TemporalCellProps {
  formatter: Intl.DateTimeFormat;
}

export function TemporalCell(props: TemporalCellProps) {
  const cell = useCellContext<FormattableTemporal | null | undefined>();
  const value = cell.getValue();

  if (value === null || value === undefined) {
    return null;
  }

  const { formatter } = props;

  return <span className="block min-w-0 truncate">{formatTemporal(value, formatter)}</span>;
}
