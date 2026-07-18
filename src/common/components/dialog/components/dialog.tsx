import type { DialogProps as RACDialogProps } from 'react-aria-components';
import { Dialog as RACDialog } from 'react-aria-components';

import { dialogVariants } from '#src/common/components/dialog/variants';

export type DialogProps = RACDialogProps;

export function Dialog(props: DialogProps) {
  return (
    <RACDialog
      {...props}
      data-slot="dialog"
      className={dialogVariants({ className: props.className })}
    />
  );
}
