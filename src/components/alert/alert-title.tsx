import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type AlertTitleProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function AlertTitle(props: AlertTitleProps) {
  return (
    <div
      {...props}
      className={cn('group/alert-title leading-none font-medium tracking-tight', props.className) ?? ''}
    />
  );
}
