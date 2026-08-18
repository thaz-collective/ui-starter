import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const radioGroupVariants = tv({
  slots: {
    root: ['group/radio-group', 'flex flex-col flex-wrap gap-2'],
    radio: ['group/radio', 'flex items-center gap-2'],
    circle: [
      'flex aspect-square size-4 shrink-0 items-center justify-center',
      'rounded-full border border-primary shadow-sm',
      'group-data-focus-visible/radio:outline-none',
      'group-data-focus-visible/radio:ring-1',
      'group-data-focus-visible/radio:ring-ring',
      'group-data-disabled/radio:cursor-not-allowed',
      'group-data-disabled/radio:opacity-50',
      'group-data-[invalid="true"]/radio-group:border-danger',
      'group-data-invalid/radio:border-danger',
    ],
    dot: ['size-2 rounded-full bg-primary', 'scale-0', 'transition-transform', 'group-data-selected/radio:scale-100'],
    label: ['group-data-disabled/radio-group:cursor-not-allowed', 'group-data-disabled/radio-group:opacity-50'],
    description: ['group-data-[invalid="true"]/radio-group:hidden'],
    fieldError: ['group-data-[invalid="true"]/radio-group:block'],
  },
  variants: {
    orientation: {
      horizontal: {
        root: ['flex-row items-center'],
      },
      vertical: {
        root: ['flex-col'],
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
export type SlotsRadioGroupVariants = ReturnType<typeof radioGroupVariants>;
export type RequiredRadioGroupVariants = Required<SetNonNullable<RadioGroupVariants>>;
