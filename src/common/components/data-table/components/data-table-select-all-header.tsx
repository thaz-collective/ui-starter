import { Checkbox } from '#src/common/components/checkbox';
import { useDataTableTableContext } from '#src/common/components/data-table/lib/context';
import { dataTableVariants } from '#src/common/components/data-table/variants';

// Registered as `headerComponents.SelectAllHeader`. Reads selection through
// `table.Subscribe(source: table.atoms.rowSelection)` so toggling row
// selection doesn't re-render this header unless the all/some-selected
// state actually changes.
export function DataTableSelectAllHeader() {
  const table = useDataTableTableContext();

  const { selectCellContainer } = dataTableVariants();

  return (
    <table.Subscribe source={table.atoms.rowSelection}>
      {() => (
        <div className={selectCellContainer()}>
          <Checkbox
            aria-label="Select all rows"
            isSelected={table.getIsAllPageRowsSelected()}
            isIndeterminate={!table.getIsAllPageRowsSelected() && table.getIsSomePageRowsSelected()}
            onChange={(isSelected) => {
              table.toggleAllPageRowsSelected(isSelected);
            }}
          />
        </div>
      )}
    </table.Subscribe>
  );
}
