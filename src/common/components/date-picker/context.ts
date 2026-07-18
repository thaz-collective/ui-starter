import { createContext, use } from 'react';

import type { RequiredDatePickerVariants, SlotsDatePickerVariants } from './variants';

export interface DatePickerContextType extends RequiredDatePickerVariants {
  slots: SlotsDatePickerVariants;
}

export const DatePickerContext = createContext<DatePickerContextType | undefined>(undefined);

export function useDatePickerContext() {
  return use(DatePickerContext);
}
