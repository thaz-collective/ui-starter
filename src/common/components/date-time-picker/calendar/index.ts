import { CalendarCell } from './calendar-cell';
import { CalendarGrid } from './calendar-grid';
import { CalendarGridBody } from './calendar-grid-body';
import { CalendarGridHeader } from './calendar-grid-header';
import { CalendarHeader } from './calendar-header';
import { CalendarHeaderCell } from './calendar-header-cell';
import { CalendarHeading } from './calendar-heading';
import { CalendarNextButton } from './calendar-next-button';
import { CalendarPrevButton } from './calendar-prev-button';
import { CalendarRoot } from './calendar-root';

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
