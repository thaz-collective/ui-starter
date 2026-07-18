import { DatePicker as DatePickerRoot } from './components/date-picker';
import { DatePickerCalendar } from './components/date-picker-calendar';
import { Description } from './components/date-picker-description';
import { DatePickerDialog } from './components/date-picker-dialog';
import { FieldError } from './components/date-picker-field-error';
import { DatePickerGroup } from './components/date-picker-group';
import { Input } from './components/date-picker-input';
import { Label } from './components/date-picker-label';
import { LabelInputContainer } from './components/date-picker-label-input-container';
import { DatePickerPopover } from './components/date-picker-popover';
import { DatePickerTriggerButton } from './components/date-picker-trigger-button';

export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  LabelInputContainer,
  Label,
  Group: DatePickerGroup,
  Input,
  TriggerButton: DatePickerTriggerButton,
  Popover: DatePickerPopover,
  Dialog: DatePickerDialog,
  Calendar: DatePickerCalendar,
  Description,
  FieldError,
});

export type { DatePickerProps } from './components/date-picker';
export type { DatePickerCalendarProps } from './components/date-picker-calendar';
export type { DatePickerDialogProps } from './components/date-picker-dialog';
export type { DatePickerGroupProps } from './components/date-picker-group';
export type { DatePickerPopoverProps } from './components/date-picker-popover';
export type { DatePickerTriggerButtonProps } from './components/date-picker-trigger-button';

export type { DatePickerVariants, RequiredDatePickerVariants, SlotsDatePickerVariants } from './variants';
export { datePickerVariants } from './variants';
