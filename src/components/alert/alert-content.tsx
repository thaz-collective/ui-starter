import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type AlertContentProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function AlertContent(props: AlertContentProps) {
  return (
    <div
      {...props}
      className={cn('group/alert-content flex flex-1 flex-col gap-1', props.className) ?? ''}
    />
  );
}
