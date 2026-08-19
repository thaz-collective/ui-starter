import { useState } from 'react';

import { Button, Dialog, DialogTrigger, Input, Popover } from 'react-aria-components';

import type { DataTableColumnMeta } from '#src/common/components/data-table/lib/filter-fns';
import { useDataTableTableContext } from '#src/common/components/data-table/lib/context';
import { dataTableVariants } from '#src/common/components/data-table/variants';
import { ListBox } from '#src/common/components/list-box';

function inputTypeForVariant(variant: DataTableColumnMeta['variant']) {
  if (variant === 'number') {
    return 'number';
  }

  if (variant === 'date') {
    return 'date';
  }

  return 'text';
}

function filterValueToInputValue(value: unknown) {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  return '';
}

function FilterValueInput(props: {
  columnId: string;
  variant: DataTableColumnMeta['variant'];
  value: unknown;
  onChange: (value?: unknown) => void;
}) {
  if (props.variant === 'select' || props.variant === 'multi-select' || props.variant === 'boolean') {
    return null;
  }

  return (
    <Input
      aria-label={`${props.columnId} filter value`}
      type={inputTypeForVariant(props.variant)}
      value={filterValueToInputValue(props.value)}
      onChange={(event) => {
        const raw = event.currentTarget.value;

        if (props.variant !== 'number') {
          props.onChange(raw);
          return;
        }

        if (raw === '') {
          props.onChange();
          return;
        }

        props.onChange(Number(raw));
      }}
    />
  );
}

function selectedKeysFromValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (value === undefined) {
    return [];
  }

  // Filter values only ever come from a prior `String(...)` round-trip (RAC
  // selection keys) or a primitive form value — never an object with a
  // meaningful custom `toString()` — so the default stringification is fine.
  // oxlint-disable-next-line no-base-to-string
  return [String(value)];
}

function selectionModeForVariant(variant: 'select' | 'multi-select') {
  if (variant === 'multi-select') {
    return 'multiple' as const;
  }

  return 'single' as const;
}

function SelectFilterControl(props: {
  label: string;
  variant: 'select' | 'multi-select';
  options: { label: string; value: string }[];
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  return (
    <ListBox
      aria-label={`${props.label} filter value`}
      selectionMode={selectionModeForVariant(props.variant)}
      selectedKeys={selectedKeysFromValue(props.value)}
      onSelectionChange={(keys) => {
        const selected: string[] = [];
        for (const key of keys) {
          selected.push(String(key));
        }

        if (props.variant === 'multi-select') {
          props.onChange(selected);
          return;
        }

        props.onChange(selected[0]);
      }}
    >
      {props.options.map((option) => (
        <ListBox.Item
          key={option.value}
          id={option.value}
          textValue={option.label}
        >
          {option.label}
        </ListBox.Item>
      ))}
    </ListBox>
  );
}

function BooleanFilterControl(props: { label: string; value: unknown; onChange: (value?: unknown) => void }) {
  return (
    <ListBox
      aria-label={`${props.label} filter value`}
      selectionMode="single"
      selectedKeys={selectedKeysFromValue(props.value)}
      onSelectionChange={(keys) => {
        const [key] = Array.from(keys, String);

        if (key === undefined) {
          props.onChange();
          return;
        }

        props.onChange(key === 'true');
      }}
    >
      <ListBox.Item id="true">{'True'}</ListBox.Item>
      <ListBox.Item id="false">{'False'}</ListBox.Item>
    </ListBox>
  );
}

// A generic column-filter popover: one row per filterable column, control chosen
// from the column's declared `meta.variant`, writing through `column.setFilterValue`.
// Simpler than kitchen-sink-react-aria's `DataTableFilterList` (no per-filter
// operator/join-operator UI) since the plan only calls for
// `meta.variant`-driven dispatch, not the full filter-builder UX.
export function DataTableFilterList() {
  const table = useDataTableTableContext();
  const { filterPopover, filterRow } = dataTableVariants();

  const [isOpen, setIsOpen] = useState(false);

  const filterableColumns = table.getAllColumns().filter((column) => column.getCanFilter());
  const activeCount = table.state.columnFilters.length;
  let filterButtonLabel = 'Filter';

  if (activeCount) {
    filterButtonLabel = `Filter (${activeCount})`;
  }

  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button>{filterButtonLabel}</Button>
      <Popover>
        <Dialog className={filterPopover()}>
          <div className="font-semibold">{'Filters'}</div>
          {filterableColumns.map((column) => {
            const { meta } = column.columnDef;
            const label = meta?.label ?? column.id;
            const variant = meta?.variant ?? 'text';
            const options = meta?.options ?? [];
            const value = column.getFilterValue();

            return (
              <div
                key={column.id}
                className={filterRow()}
              >
                <span className="w-28 shrink-0 truncate text-sm">{label}</span>
                {(variant === 'select' || variant === 'multi-select') && (
                  <SelectFilterControl
                    label={label}
                    variant={variant}
                    options={options}
                    value={value}
                    onChange={(nextValue) => {
                      column.setFilterValue(nextValue);
                    }}
                  />
                )}
                {variant === 'boolean' && (
                  <BooleanFilterControl
                    label={label}
                    value={value}
                    onChange={(nextValue) => {
                      column.setFilterValue(nextValue);
                    }}
                  />
                )}
                <FilterValueInput
                  columnId={column.id}
                  variant={variant}
                  value={value}
                  onChange={(nextValue) => {
                    column.setFilterValue(nextValue);
                  }}
                />
              </div>
            );
          })}
          <Button
            onPress={() => {
              table.resetColumnFilters();
            }}
          >
            {'Clear all'}
          </Button>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
