import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type GroupProps = RACGroupProps;

export function Group(props: GroupProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.Group must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACGroup
      {...props}
      data-slot="group"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.group({ ...props, ...renderProps, className });
      })}
    />
  );
}
