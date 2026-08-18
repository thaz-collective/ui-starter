import { createContext, use } from 'react';

import type { RequiredSelectVariants, SlotsSelectVariants } from './variants';

export interface SelectContextType extends RequiredSelectVariants {
  slots: SlotsSelectVariants;
}

export const SelectContext = createContext<SelectContextType | undefined>(undefined);

export function useSelectContext() {
  return use(SelectContext);
}
