import {
  constructFilterFn,
  filterFn_equalsString,
  filterFn_includesString,
  filterFn_startsWith,
  filterFn_endsWith,
  filterFn_empty,
  filterFn_notEmpty,
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

        if (isFalsy(value) && operator !== 'isEmpty' && operator !== 'isNotEmpty') {
          continue;
        }

        switch (operator) {
          case 'equals': {
            result = filterFn_equalsString(row, columnId, value);
            break;
          }
          case 'notEquals': {
            result = !filterFn_equalsString(row, columnId, value);
            break;
          }
          case 'contains': {
            result = filterFn_includesString(row, columnId, value);
            break;
          }
          case 'notContains': {
            result = !filterFn_includesString(row, columnId, value);
            break;
          }
          case 'startsWith': {
            result = filterFn_startsWith(row, columnId, value);
            break;
          }
          case 'endsWith': {
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

        if (operator === 'range') {
          if (min === null && max === null) {
            continue;
          }
        } else if (min === null) {
          continue;
        }

        const rawValue = row.getValue<unknown>(columnId);
        let dataValue: number;

        if (typeof rawValue === 'number') {
          dataValue = rawValue;
        } else {
          dataValue = Number(rawValue);
        }

        switch (operator) {
          case 'equals': {
            result = dataValue === min;
            break;
          }
          case 'notEquals': {
            result = dataValue !== min;
            break;
          }
          case 'greaterThan': {
            result = dataValue > (min ?? Number.NEGATIVE_INFINITY);
            break;
          }
          case 'greaterThanOrEqual': {
            result = dataValue >= (min ?? Number.NEGATIVE_INFINITY);
            break;
          }
          case 'lessThan': {
            result = dataValue < (min ?? Number.POSITIVE_INFINITY);
            break;
          }
          case 'lessThanOrEqual': {
            result = dataValue <= (min ?? Number.POSITIVE_INFINITY);
            break;
          }
          case 'range': {
            result = (min === null || dataValue >= min) && (max === null || dataValue <= max);
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
