import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { CardContextType } from '#src/common/components/card/context';
import type { CardVariants } from '#src/common/components/card/variants';
import { CardContext } from '#src/common/components/card/context';
import { cardVariants } from '#src/common/components/card/variants';
import { Surface } from '#src/common/components/surface';

export interface CardContextProviderProps extends CardVariants {
  children: ReactNode;
}

export function CardContextProvider(props: CardContextProviderProps) {
  const { variant, children } = props;

  const value = useMemo<CardContextType>(() => {
    const calculatedVariant = variant ?? 'default';

    return {
      variant: calculatedVariant,
      slots: cardVariants({ variant }),
    };
  }, [variant]);

  if (value.variant === 'transparent') {
    return <CardContext value={value}>{children}</CardContext>;
  }

  return (
    <Surface.Provider {...value}>
      <CardContext value={value}>{children}</CardContext>
    </Surface.Provider>
  );
}
