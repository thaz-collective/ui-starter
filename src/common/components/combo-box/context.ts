import { createContext, use } from 'react';

import type { RequiredComboBoxVariants, SlotsComboBoxVariants } from './variants';

export interface ComboBoxContextType extends RequiredComboBoxVariants {
  slots: SlotsComboBoxVariants;
}

export const ComboBoxContext = createContext<ComboBoxContextType | undefined>(undefined);

export function useComboBoxContext() {
  return use(ComboBoxContext);
}
