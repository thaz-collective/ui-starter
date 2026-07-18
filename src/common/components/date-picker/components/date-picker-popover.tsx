import type { PopoverProps as InternalPopoverProps } from '#src/common/components/popover';
import { Popover as InternalPopover } from '#src/common/components/popover';

export type DatePickerPopoverProps = InternalPopoverProps;

export function DatePickerPopover(props: DatePickerPopoverProps) {
  return <InternalPopover {...props} />;
}
