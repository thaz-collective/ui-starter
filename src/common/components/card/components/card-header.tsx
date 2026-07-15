import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardHeaderProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardHeader(props: CardHeaderProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardHeader must be used within a Card or a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.header({
        className: props.className,
      })}
      data-slot="card-header"
    />
  );
}
