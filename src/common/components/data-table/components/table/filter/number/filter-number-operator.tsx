import { Select } from '#src/common/components/select';

import type { NumberFilterOperatorOption } from './options';
import { useNumberFilter } from './use-number-filter';
import { numberFilterVariants } from './variants';

interface FilterNumberOperatorProps {
  filterID: string;
  label: string;
  options: NumberFilterOperatorOption[];
}

export function FilterNumberOperator(props: FilterNumberOperatorProps) {
  const { filterID, label, options } = props;
  const { operator, updateOperator } = useNumberFilter(filterID);

  const { operatorTrigger } = numberFilterVariants();

  return (
    <Select
      aria-label={`${label} filter operator`}
      value={operator}
      onChange={(key) => {
        const option = options.find((value) => value.operator === key);

        if (option === undefined) {
          return;
        }

        updateOperator(option.operator);
      }}
    >
      <Select.Trigger className={operatorTrigger()}>
        <Select.Value />
      </Select.Trigger>
      <Select.Popover>
        <Select.ListBox>
          {options.map((value) => (
            <Select.Item
              key={value.operator}
              id={value.operator}
              textValue={value.label}
            >
              {value.label}
            </Select.Item>
          ))}
        </Select.ListBox>
      </Select.Popover>
    </Select>
  );
}
