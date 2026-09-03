import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type CardHeaderProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardHeader(props: CardHeaderProps) {
  return (
    <div
      {...props}
      className={cn('group/card-header flex flex-col gap-1 px-4', props.className) ?? ''}
    />
  );
}
