import type { ComponentPropsWithRef } from 'react';

import { Dialog as RACDialog } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const dialogVariants = tv({
  base: ['p-4 outline-none'],
});

export type DateTimePickerDialogProps = ComponentPropsWithRef<typeof RACDialog>;

export function DateTimePickerDialog(props: DateTimePickerDialogProps) {
  return (
    <RACDialog
      {...props}
      className={dialogVariants({ className: props.className })}
    />
  );
}
