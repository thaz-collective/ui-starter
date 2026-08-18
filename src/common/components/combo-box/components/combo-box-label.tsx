import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.Label must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACLabel
      {...props}
      data-slot="label"
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
