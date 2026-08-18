import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { CheckboxGroupContextType } from '#src/common/components/checkbox/context';
import type { CheckboxVariants } from '#src/common/components/checkbox/variants';
import { CheckboxGroupContext } from '#src/common/components/checkbox/context';
import { checkboxVariants } from '#src/common/components/checkbox/variants';

export interface CheckboxGroupContextProviderProps extends CheckboxVariants {
  children: ReactNode;
}

export function CheckboxGroupContextProvider(props: CheckboxGroupContextProviderProps) {
  const { children } = props;

  const value = useMemo<CheckboxGroupContextType>(() => {
    return {
      slots: checkboxVariants(),
    };
  }, []);

  return <CheckboxGroupContext value={value}>{children}</CheckboxGroupContext>;
}
