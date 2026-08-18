import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const tagGroupVariants = tv({
  slots: {
    root: ['group/tag-group', 'relative flex flex-col', 'm-0 w-full min-w-0 border-0 p-0', 'gap-2'],
    list: ['flex flex-wrap gap-2', 'data-empty:text-sm data-empty:text-muted-foreground'],
    tag: [
      'inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-xs font-semibold',
      'transition-colors',
      'data-focused:ring-ring outline-none data-focused:ring-1',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    ],
    tagDefault: ['border-transparent bg-primary text-primary-foreground', 'data-hovered:bg-primary/80'],
    tagSecondary: ['border-transparent bg-secondary text-secondary-foreground', 'data-hovered:bg-secondary/80'],
    removeButton: ['rounded-sm opacity-70', 'transition-opacity', 'data-hovered:opacity-100', 'outline-none'],
    label: [
      'group-data-[invalid="true"]/tag-group:text-danger',
      'group-data-[disabled="true"]/tag-group:cursor-not-allowed',
    ],
    description: ['group-data-[invalid="true"]/tag-group:hidden'],
    fieldError: ['group-data-[invalid="true"]/tag-group:block'],
  },
});

export type TagGroupVariants = VariantProps<typeof tagGroupVariants>;
export type SlotsTagGroupVariants = ReturnType<typeof tagGroupVariants>;
export type RequiredTagGroupVariants = Required<SetNonNullable<TagGroupVariants>>;
