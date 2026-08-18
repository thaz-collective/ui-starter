import type { ReactNode } from 'react';

import type { TagGroupProps as RACTagGroupProps } from 'react-aria-components';
import { TagGroup as RACTagGroup } from 'react-aria-components';

import type { TagGroupVariants } from '#src/common/components/tag-group/variants';
import { useTagGroupContext } from '#src/common/components/tag-group/context';

import { TagGroupContextProvider } from './tag-group-context-provider';

export interface TagGroupProps extends RACTagGroupProps, TagGroupVariants {
  children: ReactNode;
}

export function TagGroup(props: TagGroupProps) {
  return (
    <TagGroupContextProvider {...props}>
      <TagGroupInner {...props} />
    </TagGroupContextProvider>
  );
}

function TagGroupInner(props: TagGroupProps) {
  const context = useTagGroupContext();

  if (context === undefined) {
    throw new Error('TagGroup must be used within a component that extends a TagGroupContextProvider');
  }

  const { slots } = context;

  return (
    <RACTagGroup
      {...props}
      data-slot="tag-group"
      className={slots.root({ className: props.className })}
    />
  );
}
