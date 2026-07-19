import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const timeFieldVariants = tv({
  slots: {
    root: ['group/time-field', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    inputLabelContainer: [
      'group-data-[invalid="true"]/time-field:border-danger',
      'group-data-[invalid="true"]/time-field:hover:border-danger-hover',
      'group-data-[invalid="true"]/time-field:focus-within:border-danger',
      'group-data-[disabled="true"]/time-field:opacity-50',
      'group-data-[disabled="true"]/time-field:cursor-not-allowed',
    ],
    label: [
      // required indicator
      'group-data-[required="true"]/time-field:after:content-["*"]',
      'group-data-[required="true"]/time-field:after:ml-0.5',
      // hover
      'group-hover/label-input-container:text-primary-hover',
      'group-data-[invalid="true"]/time-field:group-hover/label-input-container:text-danger-hover',
      // focused → float up
      'group-focus-within/label-input-container:top-1.5',
      'group-focus-within/label-input-container:translate-y-0',
      'group-focus-within/label-input-container:text-xs',
      'group-focus-within/label-input-container:text-primary',
      // error + focused → error color wins
      'group-data-[invalid="true"]/time-field:group-focus-within/label-input-container:text-danger',
      // has value → float up
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:top-1.5',
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:translate-y-0',
      'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/label-input-container:text-xs',
      // invalid
      'group-data-[invalid="true"]/time-field:text-danger',
      // disabled
      'group-data-[disabled="true"]/time-field:cursor-not-allowed',
    ],
    input: [],
    description: ['group-data-[invalid="true"]/time-field:hidden'],
    fieldError: ['group-data-[invalid="true"]/time-field:block'],
  },
});

export type TimeFieldVariants = VariantProps<typeof timeFieldVariants>;
export type SlotsTimeFieldVariants = ReturnType<typeof timeFieldVariants>;
export type RequiredTimeFieldVariants = Required<SetNonNullable<TimeFieldVariants>>;
