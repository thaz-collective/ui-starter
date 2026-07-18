import type { ButtonProps } from 'react-aria-components';
import { ChevronRight } from 'lucide-react';
import { Button } from 'react-aria-components';

import { useCalendarContext } from '#src/common/components/calendar/context';

export type CalendarNextButtonProps = Omit<ButtonProps, 'slot' | 'children'>;

export function CalendarNextButton(props: CalendarNextButtonProps) {
  const context = useCalendarContext();

  if (context === undefined) {
    throw new Error('CalendarNextButton must be used within a component that extends a CalendarContextProvider');
  }

  const { slots } = context;

  return (
    <Button
      slot="next"
      {...props}
      className={slots.navButton({})}
    >
      <ChevronRight className="size-4" />
    </Button>
  );
}
