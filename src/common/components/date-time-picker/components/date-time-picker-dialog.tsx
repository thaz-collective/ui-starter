import type { DialogProps as InternalDialogProps } from './dialog';
import { Dialog as InternalDialog } from './dialog';

export type DateTimePickerDialogProps = InternalDialogProps;

export function DateTimePickerDialog(props: DateTimePickerDialogProps) {
  return <InternalDialog {...props} />;
}
