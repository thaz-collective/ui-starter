import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { SearchFieldContextType } from '#src/common/components/search-field/context';
import type { SearchFieldVariants } from '#src/common/components/search-field/variants';
import { SearchFieldContext } from '#src/common/components/search-field/context';
import { searchFieldVariants } from '#src/common/components/search-field/variants';

export interface SearchFieldContextProviderProps extends SearchFieldVariants {
  children: ReactNode;
}

export function SearchFieldContextProvider(props: SearchFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<SearchFieldContextType>(() => {
    return {
      slots: searchFieldVariants(),
    };
  }, []);

  return <SearchFieldContext value={value}>{children}</SearchFieldContext>;
}
