import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode;
}

export function CardDescription(props: CardDescriptionProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardDescription must be used within a Card or a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.description({
        className: props.className,
      })}
      data-slot="card-description"
    />
  );
}
