import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const searchFieldVariants = tv({
  slots: {
    root: ['group/search-field', 'relative inline-flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-1'],
    group: [
      'group-data-[invalid="true"]/search-field:border-danger',
      'group-data-[invalid="true"]/search-field:hover:border-danger-hover',
      'group-data-[invalid="true"]/search-field:focus-within:border-danger',
      'group-data-[disabled="true"]/search-field:opacity-50',
      'group-data-[disabled="true"]/search-field:cursor-not-allowed',
    ],
    icon: [],
    input: [],
    clearButton: [],
    label: [
      'group-data-[invalid="true"]/search-field:text-danger',
      'group-data-[disabled="true"]/search-field:cursor-not-allowed',
    ],
    description: ['group-data-[invalid="true"]/search-field:hidden'],
    fieldError: ['group-data-[invalid="true"]/search-field:block'],
  },
});

export type SearchFieldVariants = VariantProps<typeof searchFieldVariants>;
export type SlotsSearchFieldVariants = ReturnType<typeof searchFieldVariants>;
export type RequiredSearchFieldVariants = Required<SetNonNullable<SearchFieldVariants>>;
