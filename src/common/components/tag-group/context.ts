import { createContext, use } from 'react';

import type { RequiredTagGroupVariants, SlotsTagGroupVariants } from './variants';

export interface TagGroupContextType extends RequiredTagGroupVariants {
  slots: SlotsTagGroupVariants;
}

export const TagGroupContext = createContext<TagGroupContextType | undefined>(undefined);

export function useTagGroupContext() {
  return use(TagGroupContext);
}
