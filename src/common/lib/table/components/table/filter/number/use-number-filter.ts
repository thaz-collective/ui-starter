import type { NumberFilterOperator, NumberFilterValue } from '#src/common/lib/table/lib/dynamic-filter/filter-util';
import { useDynamicFilter } from '#src/common/lib/table/components/table/filter/use-dynamic-filter';
import { isNumberColumnFilter } from '#src/common/lib/table/lib/dynamic-filter/filter-util';

export function useNumberFilter(filterID: string) {
  const { columnFilters, updateFilterOperator, updateFilterValue } = useDynamicFilter();

  const filter = columnFilters.find((candidate) => candidate.filterID === filterID);

  if (!isNumberColumnFilter(filter)) {
    throw new Error('Filter is mismatched type');
  }

  const updateOperator = (nextOperator: NumberFilterOperator) => {
    updateFilterOperator(filterID, nextOperator);
  };

  const updateValue = (nextValue: NumberFilterValue | null) => {
    updateFilterValue(filterID, nextValue);
  };

  return {
    operator: filter.operator,
    value: filter.value,
    updateOperator,
    updateValue,
  };
}
