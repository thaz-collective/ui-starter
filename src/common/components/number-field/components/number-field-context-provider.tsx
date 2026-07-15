import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { NumberFieldContextType } from '#src/common/components/number-field/context';
import type { NumberFieldVariants } from '#src/common/components/number-field/variants';
import { NumberFieldContext } from '#src/common/components/number-field/context';
import { numberFieldVariants } from '#src/common/components/number-field/variants';

export interface NumberFieldContextProviderProps extends NumberFieldVariants {
  children: ReactNode;
}

export function NumberFieldContextProvider(props: NumberFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<NumberFieldContextType>(() => {
    return {
      slots: numberFieldVariants(),
    };
  }, []);

  return <NumberFieldContext value={value}>{children}</NumberFieldContext>;
}
