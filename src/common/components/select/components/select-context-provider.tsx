import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { SelectContextType } from '#src/common/components/select/context';
import type { SelectVariants } from '#src/common/components/select/variants';
import { SelectContext } from '#src/common/components/select/context';
import { selectVariants } from '#src/common/components/select/variants';

export interface SelectContextProviderProps extends SelectVariants {
  children: ReactNode;
}

export function SelectContextProvider(props: SelectContextProviderProps) {
  const { children } = props;

  const value = useMemo<SelectContextType>(() => {
    return {
      slots: selectVariants(),
    };
  }, []);

  return <SelectContext value={value}>{children}</SelectContext>;
}
