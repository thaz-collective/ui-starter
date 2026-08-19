import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const listBoxVariants = tv({
  slots: {
    root: [
      'flex max-h-[inherit] w-full min-w-0 flex-col gap-1 overflow-auto p-1 outline-none',
      'data-empty:items-center data-empty:justify-center data-empty:p-6 data-empty:text-sm data-empty:text-muted-foreground',
    ],
    item: [
      'relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none',
      'data-disabled:pointer-events-none data-disabled:opacity-50',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
      'data-focused:bg-muted data-focused:text-foreground',
      'data-hovered:bg-muted data-hovered:text-foreground',
      'data-selected:bg-muted data-selected:text-foreground',
      'data-selection-mode:pr-8',
    ],
    checkIndicator: ['absolute right-2 flex size-4 items-center justify-center'],
    header: ['px-2 py-1.5 text-sm font-semibold text-foreground'],
  },
});

export type ListBoxVariants = VariantProps<typeof listBoxVariants>;
export type SlotsListBoxVariants = ReturnType<typeof listBoxVariants>;
export type RequiredListBoxVariants = Required<SetNonNullable<ListBoxVariants>>;
