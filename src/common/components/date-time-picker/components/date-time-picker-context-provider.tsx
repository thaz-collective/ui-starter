import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { DateTimePickerContextType } from '#src/common/components/date-time-picker/context';
import type { DateTimePickerVariants } from '#src/common/components/date-time-picker/variants';
import { DateTimePickerContext } from '#src/common/components/date-time-picker/context';
import { dateTimePickerVariants } from '#src/common/components/date-time-picker/variants';

export interface DateTimePickerContextProviderProps extends DateTimePickerVariants {
  children: ReactNode;
}

export function DateTimePickerContextProvider(props: DateTimePickerContextProviderProps) {
  const { children } = props;

  const value = useMemo<DateTimePickerContextType>(() => {
    return {
      slots: dateTimePickerVariants(),
    };
  }, []);

  return <DateTimePickerContext value={value}>{children}</DateTimePickerContext>;
}
