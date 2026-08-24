import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const descriptionVariants = tv({
  base: ['group/card-description text-xs leading-snug opacity-60'],
});

type CardDescriptionProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardDescription(props: CardDescriptionProps) {
  return (
    <div
      {...props}
      className={descriptionVariants({ ...props })}
    />
  );
}
