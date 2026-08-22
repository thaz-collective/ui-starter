import { Input } from 'react-aria-components';

import { useNumberFilter } from './use-number-filter';
import { numberFilterVariants } from './variants';

interface FilterNumberValueProps {
  filterID: string;
  label: string;
}

function parseInputValue(rawValue: string): number | null {
  if (rawValue === '') {
    return null;
  }

  const parsed = Number(rawValue);

  if (Number.isNaN(parsed)) {
    return null;
  }

  return parsed;
}

export function FilterNumberValue(props: FilterNumberValueProps) {
  const { filterID, label } = props;
  const { operator, value, updateValue } = useNumberFilter(filterID);

  const { valueGroup, valueInput } = numberFilterVariants();

  const isRange = operator === 'range';
  const min = value?.min ?? null;
  const max = value?.max ?? null;

  return (
    <div className={valueGroup()}>
      <Input
        type="number"
        aria-label={`${label} filter minimum value`}
        className={valueInput()}
        value={min ?? ''}
        disabled={operator === null}
        onChange={(event) => {
          updateValue({ min: parseInputValue(event.target.value), max });
        }}
      />
      <Input
        type="number"
        aria-label={`${label} filter maximum value`}
        className={valueInput()}
        value={max ?? ''}
        disabled={!isRange}
        onChange={(event) => {
          updateValue({ min, max: parseInputValue(event.target.value) });
        }}
      />
    </div>
  );
}
