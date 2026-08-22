import type { StringFilterOperator } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import { useDynamicFilter } from '#src/common/components/data-table/components/table/filter/use-dynamic-filter';
import { isStringColumnFilter } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

export function useStringFilter(filterID: string) {
  const { columnFilters, updateFilterOperator, updateFilterValue } = useDynamicFilter();

  const filter = columnFilters.find((candidate) => candidate.filterID === filterID);

  if (!isStringColumnFilter(filter)) {
    throw new Error('Filter is mismatched type');
  }

  const updateOperator = (nextOperator: StringFilterOperator) => {
    updateFilterOperator(filterID, nextOperator);
  };

  const updateValue = (nextValue: string | null) => {
    updateFilterValue(filterID, nextValue);
  };

  return {
    operator: filter.operator,
    value: filter.value,
    updateOperator,
    updateValue,
  };
}
