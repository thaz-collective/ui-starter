import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { SurfaceContextType } from '#src/common/components/surface/context';
import type { SurfaceVariants } from '#src/common/components/surface/variants';
import { SurfaceContext } from '#src/common/components/surface/context';
import { surfaceVariants } from '#src/common/components/surface/variants';

export interface SurfaceContextProviderProps extends SurfaceVariants {
  children: ReactNode;
}

export function SurfaceContextProvider(props: SurfaceContextProviderProps) {
  const { variant, children } = props;

  // const context = useSurfaceContext();

  const value = useMemo<SurfaceContextType>(() => {
    // TODO Do I want to auto set the value to the next most nested value?
    // let calculatedVariant = variant;
    // if (variant === undefined && context !== undefined) {
    //   const { variant: contextVariant } = context;
    //
    //   if (contextVariant === 'default') {
    //     calculatedVariant = 'secondary';
    //   } else if (contextVariant === 'secondary') {
    //     calculatedVariant = 'tertiary';
    //   } else if (contextVariant === 'tertiary') {
    //     console.warn('Surface Depth exceeded. Consult style guide');
    //   }
    // } else if (context !== undefined) {
    //   // Note - This section should not override the value. But it should check for invalid values
    //   const { variant: contextVariant } = context;
    //
    //   // TODO: Check these and do I even want these checks?
    //   if (variant === 'default' && (contextVariant === 'secondary' || contextVariant === 'tertiary')) {
    //     console.warn('Card Depth potential Mismatch');
    //   } else if (variant === 'secondary' && contextVariant === 'tertiary') {
    //     console.warn('Card Depth potential Mismatch');
    //   }
    // }
    //
    // calculatedVariant ??= 'default';

    const calculatedVariant = variant ?? 'default';

    return {
      variant: calculatedVariant,
      slots: surfaceVariants({ variant: calculatedVariant }),
    };
  }, [variant]);

  return <SurfaceContext value={value}>{children}</SurfaceContext>;
}
