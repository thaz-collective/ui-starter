import { createContext, use } from 'react';

import type { RequiredCheckboxVariants, SlotsCheckboxVariants } from './variants';

export interface CheckboxGroupContextType extends RequiredCheckboxVariants {
  slots: SlotsCheckboxVariants;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextType | undefined>(undefined);

export function useCheckboxGroupContext() {
  return use(CheckboxGroupContext);
}
