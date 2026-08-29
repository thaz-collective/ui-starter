import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const stringFilterVariants = tv({
  slots: {
    operatorTrigger: [
      'flex h-7 items-center gap-1 rounded-sm border border-field-border bg-field px-1.5 text-xs outline-none',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    ],
  },
});

export type StringFilterVariants = VariantProps<typeof stringFilterVariants>;
export type SlotsStringFilterVariants = ReturnType<typeof stringFilterVariants>;
export type RequiredStringFilterVariants = Required<SetNonNullable<StringFilterVariants>>;
