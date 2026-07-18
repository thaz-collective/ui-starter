import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { DatePickerContextType } from '#src/common/components/date-picker/context';
import type { DatePickerVariants } from '#src/common/components/date-picker/variants';
import { DatePickerContext } from '#src/common/components/date-picker/context';
import { datePickerVariants } from '#src/common/components/date-picker/variants';

export interface DatePickerContextProviderProps extends DatePickerVariants {
  children: ReactNode;
}

export function DatePickerContextProvider(props: DatePickerContextProviderProps) {
  const { children } = props;

  const value = useMemo<DatePickerContextType>(() => {
    return {
      slots: datePickerVariants(),
    };
  }, []);

  return <DatePickerContext value={value}>{children}</DatePickerContext>;
}
