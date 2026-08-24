import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const titleVariants = tv({
  base: ['group/card-title text-sm leading-none font-semibold tracking-tight'],
});

type CardTitleProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardTitle(props: CardTitleProps) {
  return (
    <div
      {...props}
      className={titleVariants({ ...props })}
    />
  );
}
