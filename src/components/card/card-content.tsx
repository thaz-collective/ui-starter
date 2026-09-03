import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type CardContentProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardContent(props: CardContentProps) {
  return (
    <div
      {...props}
      className={cn('group/card-content px-4', props.className) ?? ''}
    />
  );
}
