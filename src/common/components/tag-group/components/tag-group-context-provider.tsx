import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { TagGroupContextType } from '#src/common/components/tag-group/context';
import type { TagGroupVariants } from '#src/common/components/tag-group/variants';
import { TagGroupContext } from '#src/common/components/tag-group/context';
import { tagGroupVariants } from '#src/common/components/tag-group/variants';

export interface TagGroupContextProviderProps extends TagGroupVariants {
  children: ReactNode;
}

export function TagGroupContextProvider(props: TagGroupContextProviderProps) {
  const { children } = props;

  const value = useMemo<TagGroupContextType>(() => {
    return {
      slots: tagGroupVariants(),
    };
  }, []);

  return <TagGroupContext value={value}>{children}</TagGroupContext>;
}
