import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  slots: {
    root: ['group/select', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    trigger: [
      'flex h-9 w-full items-center justify-between gap-2',
      'rounded-md border border-field-border bg-field px-3 text-sm text-foreground',
      'transition-colors duration-150',
      'hover:border-primary-hover',
      'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      'group-data-[invalid="true"]/select:border-danger',
      'group-data-[invalid="true"]/select:hover:border-danger-hover',
    ],
    value: ['line-clamp-1 data-[placeholder]:text-muted-foreground', '[&>[slot=description]]:hidden'],
    popover: ['w-[--trigger-width]'],
    listBox: ['max-h-[inherit] overflow-auto p-1 outline-none'],
    item: [
      'relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none',
      'data-disabled:pointer-events-none data-disabled:opacity-50',
      'data-focused:bg-muted data-focused:text-foreground',
      'data-hovered:bg-muted data-hovered:text-foreground',
      'data-selection-mode:pr-8',
    ],
    checkIndicator: ['absolute right-2 flex size-4 items-center justify-center'],
    header: ['px-2 py-1.5 text-sm font-semibold text-foreground'],
    label: [
      'group-data-[required="true"]/select:after:content-["*"]',
      'group-data-[required="true"]/select:after:ml-0.5',
      'text-sm font-medium text-muted-foreground',
      'group-data-[invalid="true"]/select:text-danger',
      'group-data-[disabled="true"]/select:cursor-not-allowed',
    ],
    description: ['group-data-[invalid="true"]/select:hidden'],
    fieldError: ['group-data-[invalid="true"]/select:block'],
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
export type SlotsSelectVariants = ReturnType<typeof selectVariants>;
export type RequiredSelectVariants = Required<SetNonNullable<SelectVariants>>;
