import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const textFieldVariants = tv({
  slots: {
    root: ['group/text-field', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    inputLabelContainer: [
      'group-data-[invalid="true"]/text-field:border-danger',
      'group-data-[invalid="true"]/text-field:hover:border-danger-hover',
      'group-data-[invalid="true"]/text-field:focus-within:border-danger',
      'group-data-[disabled="true"]/text-field:opacity-50',
      'group-data-[disabled="true"]/text-field:cursor-not-allowed',
    ],
    label: [
      // required indicator
      'group-data-[required="true"]/text-field:after:content-["*"]',
      'group-data-[required="true"]/text-field:after:ml-0.5',
      // hover
      'group-hover/label-input-container:text-primary-hover',
      'group-data-[invalid="true"]/text-field:group-hover/label-input-container:text-danger-hover',
      // textarea: always sit near top
      'group-has-[textarea]/label-input-container:top-1.5',
      'group-has-[textarea]/label-input-container:translate-y-0',
      'group-has-[textarea]/label-input-container:text-xs',
      // input focused → float up
      'group-has-[input:focus]/label-input-container:top-1.5',
      'group-has-[input:focus]/label-input-container:translate-y-0',
      'group-has-[input:focus]/label-input-container:text-xs',
      'group-has-[input:focus]/label-input-container:text-primary',
      // textarea focused
      'group-has-[textarea:focus]/label-input-container:text-primary',
      // error + focused → error color wins
      'group-data-[invalid="true"]/text-field:group-has-[input:focus]/label-input-container:text-danger',
      'group-data-[invalid="true"]/text-field:group-has-[textarea:focus]/label-input-container:text-danger',
      // has value → float up
      'group-has-[input:not(:placeholder-shown)]/label-input-container:top-1.5',
      'group-has-[input:not(:placeholder-shown)]/label-input-container:translate-y-0',
      'group-has-[input:not(:placeholder-shown)]/label-input-container:text-xs',
      'group-has-[textarea:not(:placeholder-shown)]/label-input-container:text-xs',
      // invalid
      'group-data-[invalid="true"]/text-field:text-danger',
      // disabled
      'group-data-[disabled="true"]/text-field:cursor-not-allowed',
    ],
    input: ['group-focus-within/label-input-container:placeholder:opacity-100'],
    textArea: ['group-focus-within/label-input-container:placeholder:opacity-100'],
    description: ['group-data-[invalid="true"]/text-field:hidden'],
    fieldError: ['group-data-[invalid="true"]/text-field:block'],
  },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
export type SlotsTextFieldVariants = ReturnType<typeof textFieldVariants>;
export type RequiredTextFieldVariants = Required<SetNonNullable<TextFieldVariants>>;
