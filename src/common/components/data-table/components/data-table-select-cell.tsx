import { Checkbox } from '#src/common/components/checkbox';
import { useDataTableCellContext, useDataTableTableContext } from '#src/common/components/data-table/lib/context';
import { dataTableVariants } from '#src/common/components/data-table/variants';

// Registered as `cellComponents.SelectCell`. Reads selection through
// `table.Subscribe(source: table.atoms.rowSelection)` (v9's fine-grained
// reactivity) rather than `table.state.rowSelection`, so toggling one row's
// checkbox only re-renders that row's cell and the select-all header, not
// every cell in the table.
export function DataTableSelectCell() {
  const cell = useDataTableCellContext();
  const table = useDataTableTableContext();
  const { row } = cell;

  const { selectCellContainer } = dataTableVariants();

  return (
    <table.Subscribe source={table.atoms.rowSelection}>
      {() => (
        <div className={selectCellContainer()}>
          <Checkbox
            aria-label="Select row"
            isSelected={row.getIsSelected()}
            onChange={(isSelected) => {
              row.toggleSelected(isSelected);
            }}
          />
        </div>
      )}
    </table.Subscribe>
  );
}
