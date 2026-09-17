import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type AlertDescriptionProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function AlertDescription(props: AlertDescriptionProps) {
  return (
    <div
      {...props}
      className={cn('group/alert-description text-sm opacity-90', props.className) ?? ''}
    />
  );
}
