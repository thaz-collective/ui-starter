import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const footerVariants = tv({
  base: ['group/card-footer flex items-center gap-2 px-4 pb-4'],
});

type CardFooterProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardFooter(props: CardFooterProps) {
  return (
    <div
      {...props}
      className={footerVariants({ ...props })}
    />
  );
}
