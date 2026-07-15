import { createContext, use } from 'react';

import type { RequiredNumberFieldVariants, SlotsNumberFieldVariants } from './variants';

export interface NumberFieldContextType extends RequiredNumberFieldVariants {
  slots: SlotsNumberFieldVariants;
}

export const NumberFieldContext = createContext<NumberFieldContextType | undefined>(undefined);

export function useNumberFieldContext() {
  return use(NumberFieldContext);
}
