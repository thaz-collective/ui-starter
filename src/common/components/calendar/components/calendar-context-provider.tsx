import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { CalendarContextType } from '#src/common/components/calendar/context';
import type { CalendarVariants } from '#src/common/components/calendar/variants';
import { CalendarContext } from '#src/common/components/calendar/context';
import { calendarVariants } from '#src/common/components/calendar/variants';

export interface CalendarContextProviderProps extends CalendarVariants {
  children: ReactNode;
}

export function CalendarContextProvider(props: CalendarContextProviderProps) {
  const { children } = props;

  const value = useMemo<CalendarContextType>(() => {
    return {
      slots: calendarVariants(),
    };
  }, []);

  return <CalendarContext value={value}>{children}</CalendarContext>;
}
