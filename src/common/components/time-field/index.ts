import { Description } from './time-field-description';
import { FieldError } from './time-field-field-error';
import { Input } from './time-field-input';
import { Label } from './time-field-label';
import { LabelInputContainer } from './time-field-label-input-container';
import { TimeFieldRoot } from './time-field-root';
import { TimeFieldRootDebounced } from './time-field-root-debounced';

export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  RootDebounced: TimeFieldRootDebounced,
  LabelInputContainer,
  Label,
  Input,
  Description,
  FieldError,
});
