import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const dataTableVariants = tv({
  slots: {
    toolbar: ['flex flex-wrap items-center justify-between gap-2'],
    search: ['w-full max-w-xs'],
    toolbarActions: ['flex items-center gap-2'],
    columnHeaderButton: [
      'flex items-center gap-1 rounded-sm px-1 py-0.5 text-left font-medium outline-none',
      'hover:bg-muted hover:text-foreground',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    ],
    columnHeaderMenuButton: [
      'flex size-6 items-center justify-center rounded-sm outline-none',
      'hover:bg-muted hover:text-foreground',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    ],
    selectCellContainer: ['flex items-center justify-center'],
    filterPopover: ['flex w-80 flex-col gap-3 p-3'],
    filterRow: ['flex items-center gap-2'],
  },
});

export type DataTableVariants = VariantProps<typeof dataTableVariants>;
export type SlotsDataTableVariants = ReturnType<typeof dataTableVariants>;
export type RequiredDataTableVariants = Required<SetNonNullable<DataTableVariants>>;
