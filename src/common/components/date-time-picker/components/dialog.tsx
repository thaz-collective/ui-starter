import type { DialogProps as RACDialogProps } from 'react-aria-components';
import { Dialog as RACDialog } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const dialogVariants = tv({
  base: ['p-4 outline-none'],
});

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
