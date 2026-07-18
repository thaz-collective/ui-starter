import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const calendarVariants = tv({
  slots: {
    root: ['group/calendar', 'flex flex-col gap-2'],
    header: ['flex items-center justify-between gap-2'],
    heading: ['text-sm font-semibold'],
    navButton: [
      'flex size-7 cursor-default items-center justify-center rounded-md text-muted-foreground transition-colors outline-none',
      'data-disabled:opacity-50',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
      'data-hovered:bg-muted data-hovered:text-foreground',
      'data-pressed:brightness-95',
    ],
    grid: ['w-full border-collapse'],
    headerCell: ['pb-1 text-xs font-medium text-muted-foreground'],
    cell: [
      'size-8 cursor-default rounded-md p-0 text-center text-sm outline-none',
      'data-outside-month:text-muted-foreground/40',
      'data-hovered:bg-muted',
      'data-pressed:brightness-95',
      'data-focus-visible:ring-1 data-focus-visible:ring-primary',
      'data-selected:bg-primary data-selected:text-primary-foreground',
      'data-today:font-semibold',
      'data-unavailable:text-muted-foreground/40 data-unavailable:line-through',
      'data-disabled:opacity-50',
    ],
  },
});

export type CalendarVariants = VariantProps<typeof calendarVariants>;
export type SlotsCalendarVariants = ReturnType<typeof calendarVariants>;
export type RequiredCalendarVariants = Required<SetNonNullable<CalendarVariants>>;
