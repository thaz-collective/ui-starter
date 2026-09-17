import { DateInput } from '#src/components/date-input';
import { Description } from '#src/components/description';
import { FieldContainer } from '#src/components/field-container';
import { FieldError } from '#src/components/field-error';
import { Label } from '#src/components/label';

import { TimeFieldRoot } from './time-field-root';
import { TimeFieldRootDebounced } from './time-field-root-debounced';

export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  RootDebounced: TimeFieldRootDebounced,
  FieldContainer,
  Label,
  Input: DateInput,
  Description,
  FieldError,
});
