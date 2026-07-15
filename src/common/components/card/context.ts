import { createContext, use } from 'react';

import type { RequiredCardVariants, SlotsCardVariants } from './variants';

export interface CardContextType extends RequiredCardVariants {
  slots: SlotsCardVariants;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export function useCardContext() {
  return use(CardContext);
}
