import type { DialogProps as InternalDialogProps } from '#src/common/components/dialog';
import { Dialog as InternalDialog } from '#src/common/components/dialog';

export type DatePickerDialogProps = InternalDialogProps;

export function DatePickerDialog(props: DatePickerDialogProps) {
  return <InternalDialog {...props} />;
}
