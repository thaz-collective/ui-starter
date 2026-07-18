import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const datePickerVariants = tv({
  slots: {
    root: ['group/date-picker', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    inputLabelContainer: [
      'group-data-[invalid="true"]/date-picker:border-danger',
      'group-data-[invalid="true"]/date-picker:hover:border-danger-hover',
      'group-data-[invalid="true"]/date-picker:focus-within:border-danger',
      'group-data-[disabled="true"]/date-picker:opacity-50',
      'group-data-[disabled="true"]/date-picker:cursor-not-allowed',
    ],
    label: [
      // required indicator
      'group-data-[required="true"]/date-picker:after:content-["*"]',
      'group-data-[required="true"]/date-picker:after:ml-0.5',
      // hover
      'group-hover/label-input-container:text-primary-hover',
      'group-data-[invalid="true"]/date-picker:group-hover/label-input-container:text-danger-hover',
      // focused → float up
      'group-focus-within/label-input-container:top-1.5',
      'group-focus-within/label-input-container:translate-y-0',
      'group-focus-within/label-input-container:text-xs',
      'group-focus-within/label-input-container:text-primary',
      // error + focused → error color wins
      'group-data-[invalid="true"]/date-picker:group-focus-within/label-input-container:text-danger',
      // has value → float up
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:top-1.5',
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:translate-y-0',
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:text-xs',
      // invalid
      'group-data-[invalid="true"]/date-picker:text-danger',
      // disabled
      'group-data-[disabled="true"]/date-picker:cursor-not-allowed',
    ],
    group: ['flex w-full items-stretch'],
    input: [],
    button: [
      'flex w-9 shrink-0 cursor-default items-center justify-center rounded-r-md text-muted-foreground transition-colors outline-none',
      'border-l border-field-border',
      'data-disabled:opacity-50',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',
      'data-hovered:bg-[var(--field-hover)] data-hovered:text-foreground',
      'data-pressed:brightness-95',
    ],
    description: ['group-data-[invalid="true"]/date-picker:hidden'],
    fieldError: ['group-data-[invalid="true"]/date-picker:block'],
  },
});

export type DatePickerVariants = VariantProps<typeof datePickerVariants>;
export type SlotsDatePickerVariants = ReturnType<typeof datePickerVariants>;
export type RequiredDatePickerVariants = Required<SetNonNullable<DatePickerVariants>>;
