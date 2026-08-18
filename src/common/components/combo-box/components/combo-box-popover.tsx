import { composeRenderProps } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

import type { PopoverProps as InternalPopoverProps } from './popover';
import { Popover as InternalPopover } from './popover';

export type ComboBoxPopoverProps = InternalPopoverProps;

export function ComboBoxPopover(props: ComboBoxPopoverProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.Popover must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <InternalPopover
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.popover({ ...props, ...renderProps, className });
      })}
    />
  );
}
