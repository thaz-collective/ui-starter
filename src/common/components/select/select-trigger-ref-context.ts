import type { RefObject } from 'react';
import { createContext, use } from 'react';

export const SelectTriggerRefContext = createContext<RefObject<HTMLDivElement | null> | undefined>(undefined);

export const useSelectTriggerRef = () => {
  const contextTriggerRef = use(SelectTriggerRefContext);

  if (contextTriggerRef === undefined) {
    throw new Error('useSelectTriggerRef must be used within a Select component');
  }

  return contextTriggerRef;
};
