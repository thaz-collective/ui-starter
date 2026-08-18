import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { RadioGroupContextType } from '#src/common/components/radio-group/context';
import type { RadioGroupVariants } from '#src/common/components/radio-group/variants';
import { RadioGroupContext } from '#src/common/components/radio-group/context';
import { radioGroupVariants } from '#src/common/components/radio-group/variants';

export interface RadioGroupContextProviderProps extends RadioGroupVariants {
  children: ReactNode;
}

export function RadioGroupContextProvider(props: RadioGroupContextProviderProps) {
  const { children, orientation = 'vertical' } = props;

  const value = useMemo<RadioGroupContextType>(() => {
    return {
      slots: radioGroupVariants({ orientation }),
      orientation,
    };
  }, [orientation]);

  return <RadioGroupContext value={value}>{children}</RadioGroupContext>;
}
