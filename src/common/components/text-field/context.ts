import { createContext, use } from 'react';

import type { RequiredTextFieldVariants, SlotsTextFieldVariants } from './variants';

export interface TextFieldContextType extends RequiredTextFieldVariants {
  slots: SlotsTextFieldVariants;
}

export const TextFieldContext = createContext<TextFieldContextType | undefined>(undefined);

export function useTextFieldContext() {
  return use(TextFieldContext);
}
