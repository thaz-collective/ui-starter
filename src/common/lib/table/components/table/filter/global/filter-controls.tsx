import type { DataTableColumnMeta } from '#src/common/lib/table/lib/dynamic-filter/filter-util';
import {
  DEFAULT_NUMBER_FILTER_OPERATOR_OPTION_LIST,
  FilterNumberOperator,
  FilterNumberValue,
} from '#src/common/lib/table/components/table/filter/number';
import {
  DEFAULT_STRING_FILTER_OPERATOR_OPTION_LIST,
  FilterStringOperator,
  FilterStringValue,
} from '#src/common/lib/table/components/table/filter/string';

interface FilterControlsProps {
  filterID: string;
  label: string;
  variant: DataTableColumnMeta['variant'];
}

export function FilterControls(props: FilterControlsProps) {
  const { filterID, label, variant } = props;

  switch (variant) {
    case 'string': {
      return (
        <>
          <FilterStringOperator
            filterID={filterID}
            label={label}
            options={DEFAULT_STRING_FILTER_OPERATOR_OPTION_LIST}
          />
          <FilterStringValue
            filterID={filterID}
            label={label}
          />
        </>
      );
    }
    case 'number': {
      return (
        <>
          <FilterNumberOperator
            filterID={filterID}
            label={label}
            options={DEFAULT_NUMBER_FILTER_OPERATOR_OPTION_LIST}
          />
          <FilterNumberValue
            filterID={filterID}
            label={label}
          />
        </>
      );
    }
    default: {
      const exhaustiveCheck: never = variant;

      throw new Error(`FilterControls: unhandled filter variant "${String(exhaustiveCheck)}"`);
    }
  }
}
