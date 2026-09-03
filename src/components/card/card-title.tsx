import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type CardTitleProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardTitle(props: CardTitleProps) {
  return (
    <div
      {...props}
      className={cn('group/card-title text-sm leading-none font-semibold tracking-tight', props.className) ?? ''}
    />
  );
}
