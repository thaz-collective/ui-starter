import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

import { groupVariants } from '#src/common/components/group/variants';

export type GroupProps = RACGroupProps;

export function Group(props: GroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return groupVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
