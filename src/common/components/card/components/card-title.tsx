import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardTitleProps extends ComponentPropsWithRef<'h3'> {
  children: ReactNode;
}

export function CardTitle(props: CardTitleProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardTitle must be used within a Card or a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.title({
        className: props.className,
      })}
      data-slot="card-title"
    />
  );
}
