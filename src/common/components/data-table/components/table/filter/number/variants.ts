import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const numberFilterVariants = tv({
  slots: {
    operatorTrigger: [
      'flex h-7 items-center gap-1 rounded-sm border border-field-border bg-field px-1.5 text-xs outline-none',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    ],
    valueGroup: 'flex items-center gap-1',
  },
});

export type NumberFilterVariants = VariantProps<typeof numberFilterVariants>;
export type SlotsNumberFilterVariants = ReturnType<typeof numberFilterVariants>;
export type RequiredNumberFilterVariants = Required<SetNonNullable<NumberFilterVariants>>;
