import type { ComponentPropsWithRef, ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const headerVariants = tv({
  base: ['flex items-center justify-between gap-2'],
});

export interface CalendarHeaderProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CalendarHeader(props: CalendarHeaderProps) {
  return (
    <div
      {...props}
      className={headerVariants({ ...props })}
    />
  );
}
