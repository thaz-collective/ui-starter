import { Calendar as CalendarRoot } from './components/calendar';
import { CalendarCell } from './components/calendar-cell';
import { CalendarGrid } from './components/calendar-grid';
import { CalendarGridBody } from './components/calendar-grid-body';
import { CalendarGridHeader } from './components/calendar-grid-header';
import { CalendarHeader } from './components/calendar-header';
import { CalendarHeaderCell } from './components/calendar-header-cell';
import { CalendarHeading } from './components/calendar-heading';
import { CalendarNextButton } from './components/calendar-next-button';
import { CalendarPrevButton } from './components/calendar-prev-button';

export const Calendar = Object.assign(CalendarRoot, {
  Root: CalendarRoot,
  Header: CalendarHeader,
  Heading: CalendarHeading,
  PrevButton: CalendarPrevButton,
  NextButton: CalendarNextButton,
  Grid: CalendarGrid,
  GridHeader: CalendarGridHeader,
  HeaderCell: CalendarHeaderCell,
  GridBody: CalendarGridBody,
  Cell: CalendarCell,
});

export type { CalendarProps } from './components/calendar';
export type { CalendarCellProps } from './components/calendar-cell';
export type { CalendarGridProps } from './components/calendar-grid';
export type { CalendarHeaderCellProps } from './components/calendar-header-cell';
export type { CalendarHeaderProps } from './components/calendar-header';
export type { CalendarNextButtonProps } from './components/calendar-next-button';
export type { CalendarPrevButtonProps } from './components/calendar-prev-button';

export { useCalendarContext } from './context';

export type { CalendarVariants, RequiredCalendarVariants, SlotsCalendarVariants } from './variants';
export { calendarVariants } from './variants';
