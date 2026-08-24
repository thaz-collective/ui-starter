import { NumberFieldDecrementButton } from './number-field-decrement-button';
import { Description } from './number-field-description';
import { FieldError } from './number-field-field-error';
import { NumberFieldGroup } from './number-field-group';
import { NumberFieldIncrementButton } from './number-field-increment-button';
import { Input } from './number-field-input';
import { Label } from './number-field-label';
import { LabelInputContainer } from './number-field-label-input-container';
import { NumberFieldRoot } from './number-field-root';
import { NumberFieldRootDebounced } from './number-field-root-debounced';
import { NumberFieldStepButtons } from './number-field-step-buttons';

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
