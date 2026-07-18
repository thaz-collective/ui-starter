import { createContext, use } from 'react';

import type { RequiredDateFieldVariants, SlotsDateFieldVariants } from './variants';

export interface DateFieldContextType extends RequiredDateFieldVariants {
  slots: SlotsDateFieldVariants;
}

export const DateFieldContext = createContext<DateFieldContextType | undefined>(undefined);

export function useDateFieldContext() {
  return use(DateFieldContext);
}
