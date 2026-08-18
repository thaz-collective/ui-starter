import type { TagListProps as RACTagListProps } from 'react-aria-components';
import { composeRenderProps, TagList as RACTagList } from 'react-aria-components';

import { useTagGroupContext } from '#src/common/components/tag-group/context';

export type TagGroupListProps<T extends object> = RACTagListProps<T>;

export function List<T extends object>(props: TagGroupListProps<T>) {
  const context = useTagGroupContext();

  if (context === undefined) {
    throw new Error('TagGroup.List must be used within a component that extends a TagGroupContextProvider');
  }

  const { slots } = context;

  return (
    <RACTagList
      {...props}
      data-slot="tag-list"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.list({ ...props, ...renderProps, className });
      })}
    />
  );
}
