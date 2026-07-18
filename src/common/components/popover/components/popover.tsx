import type { PopoverProps as RACPopoverProps } from 'react-aria-components';
import { composeRenderProps, Popover as RACPopover } from 'react-aria-components';

import { popoverVariants } from '#src/common/components/popover/variants';

export type PopoverProps = RACPopoverProps;

export function Popover(props: PopoverProps) {
  return (
    <RACPopover
      offset={8}
      {...props}
      data-slot="popover"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return popoverVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
