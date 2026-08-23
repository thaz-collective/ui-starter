import { Filter as FilterIcon, X } from 'lucide-react';
import { Dialog as RACDialog, DialogTrigger as RACDialogTrigger, Popover as RACPopover } from 'react-aria-components';

import { Button } from '#src/common/components/button';
import { FilterColumn } from '#src/common/components/data-table/components/table/filter/column';
import {
  DEFAULT_JOIN_OPERATOR_OPTION_LIST,
  FilterJoinOperator,
} from '#src/common/components/data-table/components/table/filter/join';
import { useDynamicFilter } from '#src/common/components/data-table/components/table/filter/use-dynamic-filter';
import { Separator } from '#src/common/components/separator';

import { FilterControls } from './filter-controls';
import { dynamicGlobalFilterVariants } from './variants';

export function DynamicGlobalFilter() {
  const {
    columnFilters,
    filterableColumnOptions,
    filterableColumnOptionMap,
    addFilter,
    removeFilter,
    removeAllFilters,
  } = useDynamicFilter();

  const {
    trigger,
    triggerCount,
    popover,
    dialog,
    group,
    separator,
    row,
    rowControls,
    removeButton,
    footer,
    emptyState,
  } = dynamicGlobalFilterVariants();

  const groups = [...filterableColumnOptionMap].filter(([, filters]) => filters.length > 0);

  return (
    <RACDialogTrigger>
      <Button
        variant="outline"
        size="sm"
      >
        <span className={trigger()}>
          <FilterIcon
            aria-hidden="true"
            className="size-4"
          />
          {'Filter'}
          {columnFilters.length > 0 && <span className={triggerCount()}>{`(${columnFilters.length})`}</span>}
        </span>
      </Button>
      <RACPopover
        offset={8}
        className={(renderProps) => popover(renderProps)}
      >
        <RACDialog className={dialog()}>
          {groups.length === 0 && <p className={emptyState()}>{'No filters applied.'}</p>}
          {groups.length > 0 &&
            groups.map(([columnID, filters], index) => {
              const option = filterableColumnOptions.find((candidate) => candidate.id === columnID);

              if (option === undefined) {
                return null;
              }

              return (
                <div
                  key={columnID}
                  className={group()}
                >
                  {index > 0 && <Separator className={separator()} />}
                  {filters.map((filter) => (
                    <div
                      key={filter.filterID}
                      className={row()}
                    >
                      <div className={rowControls()}>
                        <FilterJoinOperator
                          filterID={filter.filterID}
                          label={option.label}
                          options={DEFAULT_JOIN_OPERATOR_OPTION_LIST}
                        />
                        <FilterColumn
                          filterID={filter.filterID}
                          label={option.label}
                        />
                        <FilterControls
                          filterID={filter.filterID}
                          label={option.label}
                          variant={option.columnMeta.variant}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="smIcon"
                        className={removeButton()}
                        aria-label={`Remove ${option.label} filter`}
                        onPress={() => {
                          removeFilter(filter.filterID);
                        }}
                      >
                        <X
                          aria-hidden="true"
                          className="size-3.5"
                        />
                      </Button>
                    </div>
                  ))}
                </div>
              );
            })}
          <div className={footer()}>
            <Button
              variant="secondary"
              size="sm"
              isDisabled={filterableColumnOptions.length === 0}
              onPress={() => {
                addFilter();
              }}
            >
              {'Add filter'}
            </Button>
            {columnFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onPress={removeAllFilters}
              >
                {'Clear all'}
              </Button>
            )}
          </div>
        </RACDialog>
      </RACPopover>
    </RACDialogTrigger>
  );
}
