import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { TimeFieldContextType } from '#src/common/components/time-field/context';
import type { TimeFieldVariants } from '#src/common/components/time-field/variants';
import { TimeFieldContext } from '#src/common/components/time-field/context';
import { timeFieldVariants } from '#src/common/components/time-field/variants';

export interface TimeFieldContextProviderProps extends TimeFieldVariants {
  children: ReactNode;
}

export function TimeFieldContextProvider(props: TimeFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<TimeFieldContextType>(() => {
    return {
      slots: timeFieldVariants(),
    };
  }, []);

  return <TimeFieldContext value={value}>{children}</TimeFieldContext>;
}
