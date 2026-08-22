import { Select } from '#src/common/components/select';

import type { StringFilterOperatorOption } from './options';
import { useStringFilter } from './use-string-filter';
import { stringFilterVariants } from './variants';

interface FilterStringOperatorProps {
  filterID: string;
  label: string;
  options: StringFilterOperatorOption[];
}

export function FilterStringOperator(props: FilterStringOperatorProps) {
  const { filterID, label, options } = props;
  const { operator, updateOperator } = useStringFilter(filterID);

  const { operatorTrigger } = stringFilterVariants();

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
