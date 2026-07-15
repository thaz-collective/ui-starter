import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardFooterProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardFooter(props: CardFooterProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardFooter must be used within a Card or a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.footer({
        className: props.className,
      })}
      data-slot="card-footer"
    />
  );
}
