import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type CardFooterProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardFooter(props: CardFooterProps) {
  return (
    <div
      {...props}
      className={cn('group/card-footer flex items-center gap-2 px-4', props.className) ?? ''}
    />
  );
}
