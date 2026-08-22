import type {
  DynamicColumnFilter,
  JoinOperator,
  FilterOperator,
} from '#src/common/components/data-table/lib/dynamic-filter/filter-util';
import { useTableContext } from '#src/common/components/data-table/lib/context';
import { isDynamicColumnFilter } from '#src/common/components/data-table/lib/dynamic-filter/filter-util';

export function useDynamicFilter() {
  const table = useTableContext();

  const { columnFilters } = table.state;

  if (!columnFilters.every((column): column is DynamicColumnFilter => isDynamicColumnFilter(column))) {
    throw new Error('useDynamicFilter must be the only filter defined and each item must match');
  }

  const filterableColumnOptions = table.getAllColumns().flatMap((column) => {
    const { meta: columnMeta } = column.columnDef;

    if (columnMeta === undefined) {
      return [];
    }
    if (!column.getCanFilter()) {
      return [];
    }

    return [
      {
        id: column.id,
        label: columnMeta.label,
        columnMeta,
        column,
      },
    ];
  });

  const addFilter = (columnID?: string) => {
    let [column] = filterableColumnOptions;

    if (columnID !== undefined) {
      column = filterableColumnOptions.find((option) => option.id === columnID);
    }

    if (column === undefined) {
      return;
    }

    const newFilter: DynamicColumnFilter = {
      id: column.id,
      filterID: crypto.randomUUID(),
      value: null,
      operator: null,
      joinOperator: 'and',
    };

    table.setColumnFilters([...columnFilters, newFilter]);
  };

  const removeFilter = (filterID: string) => {
    table.setColumnFilters(columnFilters.filter((value) => value.filterID !== filterID));
  };

  const removeAllFilters = () => {
    table.setColumnFilters([]);
  };

  const updateJoinOperator = (id: string, joinOperator: JoinOperator) => {
    table.setColumnFilters(
      columnFilters.map((value) => {
        if (id !== value.id) {
          return value;
        }

        return {
          ...value,
          joinOperator,
        };
      }),
    );
  };

  const updateFilterOperator = (filterID: string, operator: FilterOperator) => {
    table.setColumnFilters(
      columnFilters.map((value) => {
        if (filterID !== value.filterID) {
          return value;
        }

        return {
          ...value,
          operator,
          value: null,
        };
      }),
    );
  };

  const updateFilterValue = (filterID: string, filterValue: unknown) => {
    table.setColumnFilters(
      columnFilters.map((value) => {
        if (filterID !== value.filterID) {
          return value;
        }

        return {
          ...value,
          value: filterValue,
        };
      }),
    );
  };

  return {
    columnFilters,
    filterableColumnOptions,
    addFilter,
    removeFilter,
    removeAllFilters,
    updateJoinOperator,
    updateFilterOperator,
    updateFilterValue,
  };
}
