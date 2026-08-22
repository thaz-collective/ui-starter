import {
  constructFilterFn,
  filterFn_equalsString,
  filterFn_includesString,
  filterFn_startsWith,
  filterFn_endsWith,
  filterFn_empty,
  filterFn_notEmpty,
  filterFn_equals,
  filterFn_greaterThan,
  filterFn_greaterThanOrEqualTo,
  filterFn_lessThan,
  filterFn_lessThanOrEqualTo,
  filterFn_betweenInclusive,
} from '@tanstack/react-table';

import type { DynamicColumnFilter } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import {
  isDynamicColumnFilter,
  isNumberColumnFilter,
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
        const { value, operator } = filter;

        switch (operator) {
          case 'equals': {
            if (isFalsy(value)) {
              continue;
            }

            result = filterFn_equalsString(row, columnId, value);
            break;
          }
          case 'notEquals': {
            if (isFalsy(value)) {
              continue;
            }

            result = !filterFn_equalsString(row, columnId, value);
            break;
          }
          case 'contains': {
            if (isFalsy(value)) {
              continue;
            }

            result = filterFn_includesString(row, columnId, value);
            break;
          }
          case 'notContains': {
            if (isFalsy(value)) {
              continue;
            }

            result = !filterFn_includesString(row, columnId, value);
            break;
          }
          case 'startsWith': {
            if (isFalsy(value)) {
              continue;
            }

            result = filterFn_startsWith(row, columnId, value);
            break;
          }
          case 'endsWith': {
            if (isFalsy(value)) {
              continue;
            }

            result = filterFn_endsWith(row, columnId, value);
            break;
          }
          case 'isEmpty': {
            result = filterFn_empty(row, columnId, value);
            break;
          }
          case 'isNotEmpty': {
            result = filterFn_notEmpty(row, columnId, value);
            break;
          }
          default: {
            console.error(`dynamicFilter "${operator}" not found for string type`);
            continue;
          }
        }
      } else if (isNumberColumnFilter(filter)) {
        const { value, operator } = filter;
        const min = value?.min ?? null;
        const max = value?.max ?? null;

        switch (operator) {
          case 'equals': {
            if (min === null) {
              continue;
            }

            result = filterFn_equals(row, columnId, min);
            break;
          }
          case 'notEquals': {
            if (min === null) {
              continue;
            }

            result = !filterFn_equals(row, columnId, min);
            break;
          }
          case 'greaterThan': {
            if (min === null) {
              continue;
            }

            result = filterFn_greaterThan(row, columnId, min);
            break;
          }
          case 'greaterThanOrEqual': {
            if (min === null) {
              continue;
            }

            result = filterFn_greaterThanOrEqualTo(row, columnId, min);
            break;
          }
          case 'lessThan': {
            if (max === null) {
              continue;
            }

            result = filterFn_lessThan(row, columnId, max);
            break;
          }
          case 'lessThanOrEqual': {
            if (max === null) {
              continue;
            }

            result = filterFn_lessThanOrEqualTo(row, columnId, max);
            break;
          }
          case 'range': {
            if (min === null && max === null) {
              continue;
            }

            result = filterFn_betweenInclusive(row, columnId, [min ?? undefined, max ?? undefined]);
            break;
          }
          default: {
            console.error(`dynamicFilter "${String(filter.operator)}" not found for number type`);
            continue;
          }
        }
      } else {
        // TODO: will have other filter types like date just haven't done them yet
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
