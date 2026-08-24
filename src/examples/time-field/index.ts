import { TimeFieldExample } from './time-field';
import { TimeFieldInACardExample } from './time-field-in-a-card';
import { TimeFieldWithDisabledStateExample } from './time-field-with-disabled-state';
import { TimeFieldWithErrorStateExample } from './time-field-with-error-state';
import { TimeFieldWithReadonlyStateExample } from './time-field-with-readonly-state';
import { TimeFieldWithRequiredStateExample } from './time-field-with-required-state';
import { TimeFieldWithSecondsExample } from './time-field-with-seconds';

export const timeFieldExamples = {
  TimeFieldExample,
  TimeFieldWithSecondsExample,
  TimeFieldInACardExample,
  TimeFieldWithRequiredStateExample,
  TimeFieldWithErrorStateExample,
  TimeFieldWithDisabledStateExample,
  TimeFieldWithReadonlyStateExample,
} as const;
