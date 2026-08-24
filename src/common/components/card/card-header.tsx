import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const headerVariants = tv({
  base: ['group/card-header flex flex-col gap-0.5 px-4 pt-4 pb-2'],
});

type CardHeaderProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function CardHeader(props: CardHeaderProps) {
  return (
    <div
      {...props}
      className={headerVariants({ ...props })}
    />
  );
}
