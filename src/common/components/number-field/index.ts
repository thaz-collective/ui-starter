import { NumberField as NumberFieldRoot } from './components/number-field';
import { NumberFieldRootDebounced } from './components/number-field-debounced';
import { NumberFieldDecrementButton } from './components/number-field-decrement-button';
import { Description } from './components/number-field-description';
import { FieldError } from './components/number-field-field-error';
import { NumberFieldGroup } from './components/number-field-group';
import { NumberFieldIncrementButton } from './components/number-field-increment-button';
import { Input } from './components/number-field-input';
import { LabelInputContainer } from './components/number-field-input-label-container';
import { Label } from './components/number-field-label';
import { NumberFieldStepButtons } from './components/number-field-step-buttons';

export const NumberField = Object.assign(NumberFieldRoot, {
  Root: NumberFieldRoot,
  RootDebounced: NumberFieldRootDebounced,
  LabelInputContainer,
  Label,
  Group: NumberFieldGroup,
  Input,
  StepButtons: NumberFieldStepButtons,
  IncrementButton: NumberFieldIncrementButton,
  DecrementButton: NumberFieldDecrementButton,
  Description,
  FieldError,
});

export type { NumberFieldProps } from './components/number-field';
export type { NumberFieldVariants, SlotsNumberFieldVariants, RequiredNumberFieldVariants } from './variants';
export { numberFieldVariants } from './variants';
