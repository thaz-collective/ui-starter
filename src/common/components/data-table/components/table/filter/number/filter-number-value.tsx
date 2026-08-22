import { useState } from 'react';

import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import { NumberField } from '#src/common/components/number-field';

import { useNumberFilter } from './use-number-filter';
import { numberFilterVariants } from './variants';

const DEFAULT_DEBOUNCE_MS = 300;

interface FilterNumberValueProps {
  filterID: string;
  label: string;
  debounceMs?: number;
}

function toFieldValue(nextValue: number | null): number {
  if (nextValue === null) {
    return Number.NaN;
  }

  return nextValue;
}

function fromFieldValue(nextValue: number): number | null {
  if (Number.isNaN(nextValue)) {
    return null;
  }

  return nextValue;
}

export function FilterNumberValue(props: FilterNumberValueProps) {
  const { filterID, label, debounceMs = DEFAULT_DEBOUNCE_MS } = props;
  const { operator, value, updateValue } = useNumberFilter(filterID);

  const min = value?.min ?? null;
  const max = value?.max ?? null;
  const isRange = operator === 'range';

  const [prevMin, setPrevMin] = useState(min);
  const [prevMax, setPrevMax] = useState(max);
  const [minInputValue, setMinInputValue] = useState(min);
  const [maxInputValue, setMaxInputValue] = useState(max);

  if (prevMin !== min) {
    setPrevMin(min);
    setMinInputValue(min);
  }

  if (prevMax !== max) {
    setPrevMax(max);
    setMaxInputValue(max);
  }

  const debouncedUpdateMin = useDebouncedCallback(
    (nextMin: number | null) => {
      updateValue({ min: nextMin, max });
    },
    { wait: debounceMs },
  );

  const debouncedUpdateMax = useDebouncedCallback(
    (nextMax: number | null) => {
      updateValue({ min, max: nextMax });
    },
    { wait: debounceMs },
  );

  const { valueGroup } = numberFilterVariants();

  return (
    <div className={valueGroup()}>
      <NumberField
        aria-label={`${label} filter minimum value`}
        value={toFieldValue(minInputValue)}
        isDisabled={operator === null}
        onChange={(nextValue) => {
          const nextMin = fromFieldValue(nextValue);

          setMinInputValue(nextMin);
          debouncedUpdateMin(nextMin);
        }}
      >
        <NumberField.Input />
      </NumberField>
      <NumberField
        aria-label={`${label} filter maximum value`}
        value={toFieldValue(maxInputValue)}
        isDisabled={!isRange}
        onChange={(nextValue) => {
          const nextMax = fromFieldValue(nextValue);

          setMaxInputValue(nextMax);
          debouncedUpdateMax(nextMax);
        }}
      >
        <NumberField.Input />
      </NumberField>
    </div>
  );
}
