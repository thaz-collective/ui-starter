import { CalendarHeading as RACCalendarHeading } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const headingVariants = tv({
  base: ['text-sm font-semibold'],
});

export function CalendarHeading() {
  return <RACCalendarHeading className={headingVariants()} />;
}
