import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const tableVariants = tv({
  slots: {
    root: ['w-full caption-bottom text-sm -outline-offset-2', 'data-focus-visible:outline-ring'],
    header: ['[&_tr]:border-b'],
    column: [
      'h-10 text-left align-middle font-medium text-muted-foreground -outline-offset-2',
      'data-focus-visible:outline-ring',
    ],
    columnGroup: [
      'flex h-9 flex-1 items-center gap-1 overflow-hidden rounded-md px-2',
      'data-focus-visible:outline-ring outline-none data-focus-visible:-outline-offset-2',
      '[&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]',
    ],
    columnGroupSortable: ['p-2', 'data-hovered:bg-muted data-hovered:text-foreground'],
    columnResizer: [
      'box-content h-5 w-px translate-x-2 cursor-col-resize rounded bg-muted-foreground bg-clip-content px-2 py-1',
      'outline-none data-focus-visible:ring-1 data-focus-visible:ring-primary',
      'data-resizing:w-0.5 data-resizing:bg-primary data-resizing:pl-[7px]',
    ],
    body: ['[&_tr:last-child]:border-0'],
    row: [
      'border-b -outline-offset-2 transition-colors',
      'data-hovered:bg-muted/50',
      'data-selected:bg-muted',
      'data-focus-visible:outline-ring',
    ],
    cell: [
      'p-2 align-middle -outline-offset-2',
      'data-focus-visible:outline-ring',
      '[&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]',
    ],
  },
});

export type TableVariants = VariantProps<typeof tableVariants>;
export type SlotsTableVariants = ReturnType<typeof tableVariants>;
export type RequiredTableVariants = Required<SetNonNullable<TableVariants>>;
