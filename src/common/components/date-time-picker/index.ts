import { DateTimePicker as DateTimePickerRoot } from './components/date-time-picker';
import { DateTimePickerCalendar } from './components/date-time-picker-calendar';
import { Description } from './components/date-time-picker-description';
import { DateTimePickerDialog } from './components/date-time-picker-dialog';
import { FieldError } from './components/date-time-picker-field-error';
import { DateTimePickerGroup } from './components/date-time-picker-group';
import { Input } from './components/date-time-picker-input';
import { Label } from './components/date-time-picker-label';
import { LabelInputContainer } from './components/date-time-picker-label-input-container';
import { DateTimePickerPopover } from './components/date-time-picker-popover';
import { DateTimePickerTriggerButton } from './components/date-time-picker-trigger-button';

export const DateTimePicker = Object.assign(DateTimePickerRoot, {
  Root: DateTimePickerRoot,
  LabelInputContainer,
  Label,
  Group: DateTimePickerGroup,
  Input,
  TriggerButton: DateTimePickerTriggerButton,
  Popover: DateTimePickerPopover,
  Dialog: DateTimePickerDialog,
  Calendar: DateTimePickerCalendar,
  Description,
  FieldError,
});

export type { DateTimePickerProps } from './components/date-time-picker';
export type { DateTimePickerCalendarProps } from './components/date-time-picker-calendar';
export type { DateTimePickerDialogProps } from './components/date-time-picker-dialog';
export type { DateTimePickerGroupProps } from './components/date-time-picker-group';
export type { DateTimePickerPopoverProps } from './components/date-time-picker-popover';
export type { DateTimePickerTriggerButtonProps } from './components/date-time-picker-trigger-button';

export type { DateTimePickerVariants, RequiredDateTimePickerVariants, SlotsDateTimePickerVariants } from './variants';
export { dateTimePickerVariants } from './variants';
