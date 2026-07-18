import type { ButtonProps } from 'react-aria-components';
import { ChevronLeft } from 'lucide-react';
import { Button } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/calendar/context';

export type CalendarPrevButtonProps = Omit<ButtonProps, 'slot' | 'children'>;

export function CalendarPrevButton(props: CalendarPrevButtonProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarPrevButton must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <Button
      slot="previous"
      {...props}
      className={slots.navButton({})}
    >
      <ChevronLeft className="size-4" />
    </Button>
  );
}
