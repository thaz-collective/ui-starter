import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Label must be used within a component that extends a SelectContextProvider');
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
