import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type AlertActionsProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function AlertActions(props: AlertActionsProps) {
  return (
    <div
      {...props}
      className={cn('group/alert-actions mt-2 flex items-center gap-2', props.className) ?? ''}
    />
  );
}
