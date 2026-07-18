import { DateField as DateFieldRoot } from './components/date-field';
import { Description } from './components/date-field-description';
import { FieldError } from './components/date-field-field-error';
import { Input } from './components/date-field-input';
import { Label } from './components/date-field-label';
import { LabelInputContainer } from './components/date-field-label-input-container';

export const DateField = Object.assign(DateFieldRoot, {
  Root: DateFieldRoot,
  LabelInputContainer,
  Label,
  Input,
  Description,
  FieldError,
});

export type { DateFieldProps } from './components/date-field';

export type { DateFieldVariants, SlotsDateFieldVariants, RequiredDateFieldVariants } from './variants';
export { dateFieldVariants } from './variants';
