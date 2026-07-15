import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { CardVariants } from '#src/common/components/card/variants';
import { useCardContext } from '#src/common/components/card/context';

import { CardContextProvider } from './card-context-provider';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  return (
    <CardContextProvider {...props}>
      <CardRootInner {...props} />
    </CardContextProvider>
  );
}

function CardRootInner(props: CardRootProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardRoot must be used within a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.root({ className: props.className })}
      data-slot="card"
    />
  );
}
