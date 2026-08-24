import { DateTimePickerExample } from './date-time-picker';
import { DateTimePickerInACardExample } from './date-time-picker-in-a-card';
import { DateTimePickerWithDefaultValueExample } from './date-time-picker-with-default-value';
import { DateTimePickerWithDisabledStateExample } from './date-time-picker-with-disabled-state';
import { DateTimePickerWithErrorStateExample } from './date-time-picker-with-error-state';
import { DateTimePickerWithGranularityExample } from './date-time-picker-with-granularity';
import { DateTimePickerWithReadonlyStateExample } from './date-time-picker-with-readonly-state';
import { DateTimePickerWithRequiredStateExample } from './date-time-picker-with-required-state';

export const dateTimePickerExamples = {
  DateTimePickerExample,
  DateTimePickerWithDefaultValueExample,
  DateTimePickerWithGranularityExample,
  DateTimePickerInACardExample,
  DateTimePickerWithRequiredStateExample,
  DateTimePickerWithErrorStateExample,
  DateTimePickerWithDisabledStateExample,
  DateTimePickerWithReadonlyStateExample,
} as const;
