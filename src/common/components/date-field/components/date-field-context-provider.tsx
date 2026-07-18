import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { DateFieldContextType } from '#src/common/components/date-field/context';
import type { DateFieldVariants } from '#src/common/components/date-field/variants';
import { DateFieldContext } from '#src/common/components/date-field/context';
import { dateFieldVariants } from '#src/common/components/date-field/variants';

export interface DateFieldContextProviderProps extends DateFieldVariants {
  children: ReactNode;
}

export function DateFieldContextProvider(props: DateFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<DateFieldContextType>(() => {
    return {
      slots: dateFieldVariants(),
    };
  }, []);

  return <DateFieldContext value={value}>{children}</DateFieldContext>;
}
