import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { TextFieldContextType } from '#src/common/components/text-field/context';
import type { TextFieldVariants } from '#src/common/components/text-field/variants';
import { TextFieldContext } from '#src/common/components/text-field/context';
import { textFieldVariants } from '#src/common/components/text-field/variants';

export interface TextFieldContextProviderProps extends TextFieldVariants {
  children: ReactNode;
}

export function TextFieldContextProvider(props: TextFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<TextFieldContextType>(() => {
    return {
      slots: textFieldVariants(),
    };
  }, []);

  return <TextFieldContext value={value}>{children}</TextFieldContext>;
}
