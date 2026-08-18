import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    group: ['group/checkbox-group', 'flex flex-col gap-2'],
    root: ['group/checkbox', 'flex items-center gap-2'],
    box: [
      'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current shadow-sm',
      'group-data-[focus-visible]/checkbox:outline-none',
      'group-data-[focus-visible]/checkbox:ring-1',
      'group-data-[focus-visible]/checkbox:ring-ring',
      'group-data-selected/checkbox:bg-primary',
      'group-data-selected/checkbox:text-primary-foreground',
      'group-data-indeterminate/checkbox:bg-primary',
      'group-data-indeterminate/checkbox:text-primary-foreground',
      'group-data-disabled/checkbox:cursor-not-allowed',
      'group-data-disabled/checkbox:opacity-50',
      'group-data-[invalid="true"]/checkbox-group:border-danger',
      'group-data-invalid/checkbox:border-danger',
    ],
    label: ['group-data-disabled/checkbox-group:cursor-not-allowed', 'group-data-disabled/checkbox-group:opacity-50'],
    description: ['group-data-[invalid="true"]/checkbox-group:hidden'],
    fieldError: ['group-data-[invalid="true"]/checkbox-group:block'],
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
export type SlotsCheckboxVariants = ReturnType<typeof checkboxVariants>;
export type RequiredCheckboxVariants = Required<SetNonNullable<CheckboxVariants>>;
