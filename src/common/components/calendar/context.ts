import { createContext, use } from 'react';

import type { RequiredCalendarVariants, SlotsCalendarVariants } from './variants';

export interface CalendarContextType extends RequiredCalendarVariants {
  slots: SlotsCalendarVariants;
}

export const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export function useCalendarContext() {
  return use(CalendarContext);
}
