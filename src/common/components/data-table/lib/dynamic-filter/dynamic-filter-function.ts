import { constructFilterFn, filterFn_equalsString, filterFn_empty, filterFn_notEmpty } from '@tanstack/react-table';

import type { DynamicColumnFilter } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import {
  isDynamicColumnFilter,
  isStringColumnFilter,
} from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

// DataTableColumnMeta

export const dynamicFilter = constructFilterFn({
  autoRemove: () => false,
  filter: (_dataValue, _filterValue, row, columnId) => {
    const { columnFilters } = row.table.store.state;

    if (!columnFilters.every((column): column is DynamicColumnFilter => isDynamicColumnFilter(column))) {
      throw new Error('dynamicFilter must be the only filter defined and each item must match');
    }

    const filters = columnFilters.filter((value) => value.id === columnId);
    const [firstFilter] = filters;

    if (firstFilter === undefined) {
      return true;
    }

    const { joinOperator } = firstFilter;

    for (const filter of filters) {
      let result: boolean;

      if (isStringColumnFilter(filter)) {
        if (isFalsy(filter.value) && filter.operator !== 'isEmpty' && filter.operator !== 'isNotEmpty') {
          continue;
        }

        switch (filter.operator) {
          case 'equals': {
            result = filterFn_equalsString(row, columnId, filter.value);
            break;
          }
          case 'notEquals': {
            result = !filterFn_equalsString(row, columnId, filter.value);
            break;
          }
          case 'isEmpty': {
            result = filterFn_empty(row, columnId, filter.value);
            break;
          }
          case 'isNotEmpty': {
            result = filterFn_notEmpty(row, columnId, filter.value);
            break;
          }
          default: {
            console.error(`dynamicFilter "${filter.operator}" not found for string type`);
            continue;
          }
        }
      } else {
        // TODO: will have other filter types like number just haven't done them yet
        throw new Error('Unhandled filter operator');
      }

      if (joinOperator === 'or' && result) {
        return true;
      }

      if (joinOperator === 'and' && !result) {
        return false;
      }
    }

    return joinOperator === 'and';
  },
});

function isFalsy(value: unknown) {
  return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
}
