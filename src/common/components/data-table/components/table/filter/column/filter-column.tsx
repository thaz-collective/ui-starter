import { useDynamicFilter } from '#src/common/components/data-table/components/table/filter/use-dynamic-filter';
import { isDynamicColumnFilter } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import { Select } from '#src/common/components/select';

import { filterColumnVariants } from './variants';

interface FilterColumnProps {
  filterID: string;
  label: string;
}

export function FilterColumn(props: FilterColumnProps) {
  const { filterID, label } = props;
  const { columnFilters, filterableColumnOptions, updateFilterColumn } = useDynamicFilter();

  const filter = columnFilters.find((candidate) => candidate.filterID === filterID);

  if (!isDynamicColumnFilter(filter)) {
    throw new Error('Filter ID is mismatched type');
  }

  const { columnTrigger } = filterColumnVariants();

  return (
    <Select
      aria-label={`${label} filter column`}
      value={filter.id}
      onChange={(key) => {
        const option = filterableColumnOptions.find((value) => value.id === key);

        if (option === undefined) {
          return;
        }

        updateFilterColumn(filter.filterID, option.id);
      }}
    >
      <Select.Trigger className={columnTrigger()}>
        <Select.Value />
      </Select.Trigger>
      <Select.Popover>
        <Select.ListBox>
          {filterableColumnOptions.map((option) => (
            <Select.Item
              key={option.id}
              id={option.id}
              textValue={option.label}
            >
              {option.label}
            </Select.Item>
          ))}
        </Select.ListBox>
      </Select.Popover>
    </Select>
  );
}
