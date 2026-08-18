import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { ComboBoxContextType } from '#src/common/components/combo-box/context';
import type { ComboBoxVariants } from '#src/common/components/combo-box/variants';
import { ComboBoxContext } from '#src/common/components/combo-box/context';
import { comboBoxVariants } from '#src/common/components/combo-box/variants';

export interface ComboBoxContextProviderProps extends ComboBoxVariants {
  children: ReactNode;
}

export function ComboBoxContextProvider(props: ComboBoxContextProviderProps) {
  const { children } = props;

  const value = useMemo<ComboBoxContextType>(() => {
    return {
      slots: comboBoxVariants(),
    };
  }, []);

  return <ComboBoxContext value={value}>{children}</ComboBoxContext>;
}
