import { Description } from './components/time-field-description';
import { FieldError } from './components/time-field-field-error';
import { Input } from './components/time-field-input';
import { Label } from './components/time-field-label';
import { LabelInputContainer } from './components/time-field-label-input-container';
import { TimeField as TimeFieldRoot } from './components/time-field';

export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  LabelInputContainer,
  Label,
  Input,
  Description,
  FieldError,
});

export type { TimeFieldProps } from './components/time-field';

export type { TimeFieldVariants, SlotsTimeFieldVariants, RequiredTimeFieldVariants } from './variants';
export { timeFieldVariants } from './variants';
