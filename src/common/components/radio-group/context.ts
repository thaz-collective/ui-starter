import { createContext, use } from 'react';

import type { RequiredRadioGroupVariants, SlotsRadioGroupVariants } from './variants';

export interface RadioGroupContextType extends RequiredRadioGroupVariants {
  slots: SlotsRadioGroupVariants;
}

export const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

export function useRadioGroupContext() {
  return use(RadioGroupContext);
}
