import { use, useMemo, createContext } from 'react';

import type { SurfaceVariant } from './variant';

export const SurfaceVariantContext = createContext<SurfaceVariant | undefined>(undefined);

export function useSurfaceVariant() {
  const variant = use(SurfaceVariantContext);

  const nestedVariant = useMemo<SurfaceVariant>(() => {
    if (variant === 'default') {
      return 'secondary';
    } else if (variant === 'secondary') {
      return 'tertiary';
    } else if (variant === 'tertiary') {
      return 'quaternary';
    } else if (variant === 'quaternary') {
      return 'quinary';
    } else if (variant === 'quinary') {
      return 'quinary';
    }

    return 'default';
  }, [variant]);

  return {
    variant,
    nestedVariant,
  };
}
