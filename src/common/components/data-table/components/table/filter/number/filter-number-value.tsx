import { useState } from 'react';

import { useDebouncedCallback } from '@tanstack/react-pacer/debouncer';

import { NumberField } from '#src/common/components/number-field';

import { useNumberFilter } from './use-number-filter';
import { numberFilterVariants } from './variants';

const DEFAULT_DEBOUNCE_MS = 300;

const MIN_ONLY_OPERATORS = new Set(['equals', 'notEquals', 'greaterThan', 'greaterThanOrEqual']);
const MAX_ONLY_OPERATORS = new Set(['lessThan', 'lessThanOrEqual']);

interface FilterNumberValueProps {
  filterID: string;
  label: string;
  minLabel?: string;
  maxLabel?: string;
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

function getRangeLabel(isRange: boolean, label: string, suffix: string): string {
  if (isRange) {
    return `${label} ${suffix}`;
  }

  return label;
}

export function FilterNumberValue(props: FilterNumberValueProps) {
  const { filterID, label, minLabel, maxLabel, debounceMs = DEFAULT_DEBOUNCE_MS } = props;
  const { operator, value, updateValue } = useNumberFilter(filterID);

  const min = value?.min ?? null;
  const max = value?.max ?? null;
  const isRange = operator === 'range';

  const showMin = operator === null || isRange || MIN_ONLY_OPERATORS.has(operator);
  const showMax = operator === null || isRange || MAX_ONLY_OPERATORS.has(operator);

  const resolvedMinLabel = minLabel ?? getRangeLabel(isRange, label, 'min');
  const resolvedMaxLabel = maxLabel ?? getRangeLabel(isRange, label, 'max');

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
      {showMin && (
        <NumberField
          value={toFieldValue(minInputValue)}
          isDisabled={operator === null}
          onChange={(nextValue) => {
            const nextMin = fromFieldValue(nextValue);

            setMinInputValue(nextMin);
            debouncedUpdateMin(nextMin);
          }}
        >
          <NumberField.LabelInputContainer>
            <NumberField.Label>{resolvedMinLabel}</NumberField.Label>
            <NumberField.Group>
              <NumberField.Input />
              <NumberField.StepButtons>
                <NumberField.IncrementButton />
                <NumberField.DecrementButton />
              </NumberField.StepButtons>
            </NumberField.Group>
          </NumberField.LabelInputContainer>
        </NumberField>
      )}
      {showMax && (
        <NumberField
          value={toFieldValue(maxInputValue)}
          isDisabled={operator === null}
          onChange={(nextValue) => {
            const nextMax = fromFieldValue(nextValue);

            setMaxInputValue(nextMax);
            debouncedUpdateMax(nextMax);
          }}
        >
          <NumberField.LabelInputContainer>
            <NumberField.Label>{resolvedMaxLabel}</NumberField.Label>
            <NumberField.Group>
              <NumberField.Input />
              <NumberField.StepButtons>
                <NumberField.IncrementButton />
                <NumberField.DecrementButton />
              </NumberField.StepButtons>
            </NumberField.Group>
          </NumberField.LabelInputContainer>
        </NumberField>
      )}
    </div>
  );
}
