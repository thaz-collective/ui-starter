import { DateTimePickerCalendar } from './date-time-picker-calendar';
import { Description } from './date-time-picker-description';
import { DateTimePickerDialog } from './date-time-picker-dialog';
import { FieldError } from './date-time-picker-field-error';
import { DateTimePickerGroup } from './date-time-picker-group';
import { Input } from './date-time-picker-input';
import { Label } from './date-time-picker-label';
import { LabelInputContainer } from './date-time-picker-label-input-container';
import { DateTimePickerPopover } from './date-time-picker-popover';
import { DateTimePickerRoot } from './date-time-picker-root';
import { DateTimePickerRootDebounced } from './date-time-picker-root-debounced';
import { DateTimePickerTriggerButton } from './date-time-picker-trigger-button';

export const DateTimePicker = Object.assign(DateTimePickerRoot, {
  Root: DateTimePickerRoot,
  RootDebounced: DateTimePickerRootDebounced,
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
