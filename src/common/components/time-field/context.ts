import { createContext, use } from 'react';

import type { RequiredTimeFieldVariants, SlotsTimeFieldVariants } from './variants';

export interface TimeFieldContextType extends RequiredTimeFieldVariants {
  slots: SlotsTimeFieldVariants;
}

export const TimeFieldContext = createContext<TimeFieldContextType | undefined>(undefined);

export function useTimeFieldContext() {
  return use(TimeFieldContext);
}
