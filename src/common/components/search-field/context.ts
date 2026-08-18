import { createContext, use } from 'react';

import type { RequiredSearchFieldVariants, SlotsSearchFieldVariants } from './variants';

export interface SearchFieldContextType extends RequiredSearchFieldVariants {
  slots: SlotsSearchFieldVariants;
}

export const SearchFieldContext = createContext<SearchFieldContextType | undefined>(undefined);

export function useSearchFieldContext() {
  return use(SearchFieldContext);
}
