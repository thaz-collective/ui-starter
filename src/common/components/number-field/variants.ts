import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const numberFieldVariants = tv({
  slots: {
    root: ['group/number-field', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    inputLabelContainer: [
      'group-data-[invalid="true"]/number-field:border-danger',
      'group-data-[invalid="true"]/number-field:hover:border-danger-hover',
      'group-data-[invalid="true"]/number-field:focus-within:border-danger',
      'group-data-[disabled="true"]/number-field:opacity-50',
      'group-data-[disabled="true"]/number-field:cursor-not-allowed',
    ],
    label: [
      // required indicator
      'group-data-[required="true"]/number-field:after:content-["*"]',
      'group-data-[required="true"]/number-field:after:ml-0.5',
      // hover
      'group-hover/label-input-container:text-primary-hover',
      'group-data-[invalid="true"]/number-field:group-hover/label-input-container:text-danger-hover',
      // input focused → float up
      'group-has-[input:focus]/label-input-container:top-1.5',
      'group-has-[input:focus]/label-input-container:translate-y-0',
      'group-has-[input:focus]/label-input-container:text-xs',
      'group-has-[input:focus]/label-input-container:text-primary',
      // error + focused → error color wins
      'group-data-[invalid="true"]/number-field:group-has-[input:focus]/label-input-container:text-danger',
      // has value → float up
      'group-has-[input:not(:placeholder-shown)]/label-input-container:top-1.5',
      'group-has-[input:not(:placeholder-shown)]/label-input-container:translate-y-0',
      'group-has-[input:not(:placeholder-shown)]/label-input-container:text-xs',
      // invalid
      'group-data-[invalid="true"]/number-field:text-danger',
      // disabled
      'group-data-[disabled="true"]/number-field:cursor-not-allowed',
    ],
    input: ['group-focus-within/label-input-container:placeholder:opacity-100'],
    description: ['group-data-[invalid="true"]/number-field:hidden'],
    fieldError: ['group-data-[invalid="true"]/number-field:block'],
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
export type SlotsNumberFieldVariants = ReturnType<typeof numberFieldVariants>;
export type RequiredNumberFieldVariants = Required<SetNonNullable<NumberFieldVariants>>;
