import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const comboBoxVariants = tv({
  slots: {
    root: ['group/combo-box', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    group: [
      'flex w-full items-stretch',
      'rounded-md border border-field-border bg-field',
      'transition-colors duration-150',
      'hover:border-primary-hover',
      'focus-within:border-primary',
      'group-data-[invalid="true"]/combo-box:border-danger',
      'group-data-[invalid="true"]/combo-box:hover:border-danger-hover',
      'group-data-[invalid="true"]/combo-box:focus-within:border-danger',
      'group-data-[disabled="true"]/combo-box:opacity-50',
      'group-data-[disabled="true"]/combo-box:cursor-not-allowed',
    ],
    input: [
      'min-w-0 flex-1',
      'px-3 py-2',
      'bg-transparent',
      'text-sm text-foreground',
      'border-0 outline-none',
      'placeholder:text-muted-foreground',
      'data-disabled:cursor-not-allowed',
      'data-disabled:text-muted-foreground',
    ],
    triggerButton: ['mr-1 size-6 p-1'],
    popover: ['w-[calc(var(--trigger-width)+4px)]'],
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
      'group-data-[required="true"]/combo-box:after:content-["*"]',
      'group-data-[required="true"]/combo-box:after:ml-0.5',
      'text-sm font-medium text-muted-foreground',
      'group-data-[invalid="true"]/combo-box:text-danger',
      'group-data-[disabled="true"]/combo-box:cursor-not-allowed',
    ],
    description: ['group-data-[invalid="true"]/combo-box:hidden'],
    fieldError: ['group-data-[invalid="true"]/combo-box:block'],
  },
});

export type ComboBoxVariants = VariantProps<typeof comboBoxVariants>;
export type SlotsComboBoxVariants = ReturnType<typeof comboBoxVariants>;
export type RequiredComboBoxVariants = Required<SetNonNullable<ComboBoxVariants>>;
