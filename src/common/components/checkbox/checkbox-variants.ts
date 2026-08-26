import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  base: [
    'group/checkbox',
    'flex items-center gap-2',
    'text-foreground',
    'data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
});

export const boxVariants = tv({
  base: [
    'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current shadow-sm',
    'group-data-[focus-visible]/checkbox:outline-none',
    'group-data-[focus-visible]/checkbox:ring-1',
    'group-data-[focus-visible]/checkbox:ring-ring',
    'group-data-selected/checkbox:bg-primary',
    'group-data-selected/checkbox:text-primary-foreground',
    'group-data-indeterminate/checkbox:bg-primary',
    'group-data-indeterminate/checkbox:text-primary-foreground',
    'group-data-invalid/checkbox:border-danger',
    'group-data-invalid/checkbox:group-data-selected/checkbox:bg-danger',
    'group-data-invalid/checkbox:group-data-selected/checkbox:text-danger-foreground',
    'group-data-invalid/checkbox:group-data-indeterminate/checkbox:bg-danger',
    'group-data-invalid/checkbox:group-data-indeterminate/checkbox:text-danger-foreground',
  ],
});
