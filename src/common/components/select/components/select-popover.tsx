import { composeRenderProps } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

import type { PopoverProps as InternalPopoverProps } from './popover';
import { Popover as InternalPopover } from './popover';

export type SelectPopoverProps = InternalPopoverProps;

export function SelectPopover(props: SelectPopoverProps) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Popover must be used within a component that extends a SelectContextProvider');
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
