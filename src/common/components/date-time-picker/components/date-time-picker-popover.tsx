import type { PopoverProps as InternalPopoverProps } from './popover';
import { Popover as InternalPopover } from './popover';

export type DateTimePickerPopoverProps = InternalPopoverProps;

export function DateTimePickerPopover(props: DateTimePickerPopoverProps) {
  return <InternalPopover {...props} />;
}
