import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type CardDescriptionProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardDescription(props: CardDescriptionProps) {
  return (
    <div
      {...props}
      className={cn('group/card-description text-xs leading-snug text-surface-foreground/70', props.className) ?? ''}
    />
  );
}
