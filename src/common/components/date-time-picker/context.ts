import { createContext, use } from 'react';

import type { RequiredDateTimePickerVariants, SlotsDateTimePickerVariants } from './variants';

export interface DateTimePickerContextType extends RequiredDateTimePickerVariants {
  slots: SlotsDateTimePickerVariants;
}

export const DateTimePickerContext = createContext<DateTimePickerContextType | undefined>(undefined);

export function useDateTimePickerContext() {
  return use(DateTimePickerContext);
}
