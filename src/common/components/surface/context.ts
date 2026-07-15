import { createContext, use } from 'react';

import type { RequiredSurfaceVariants, SlotsSurfaceVariants } from './variants';

export interface SurfaceContextType extends RequiredSurfaceVariants {
  slots: SlotsSurfaceVariants;
}

export const SurfaceContext = createContext<SurfaceContextType | undefined>(undefined);

export function useSurfaceContext() {
  return use(SurfaceContext);
}
