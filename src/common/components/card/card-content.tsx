import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const contentVariants = tv({
  base: ['group/card-content px-4 pb-4'],
});

type CardContentProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardContent(props: CardContentProps) {
  return (
    <div
      {...props}
      className={contentVariants({ ...props })}
    />
  );
}
