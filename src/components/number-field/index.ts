import { Description } from '#src/components/description';
import { FieldContainer } from '#src/components/field-container';
import { FieldError } from '#src/components/field-error';
import { Input } from '#src/components/input';
import { Label } from '#src/components/label';

import { NumberFieldDecrementButton } from './number-field-decrement-button';
import { NumberFieldGroup } from './number-field-group';
import { NumberFieldIncrementButton } from './number-field-increment-button';
import { NumberFieldRoot } from './number-field-root';
import { NumberFieldRootDebounced } from './number-field-root-debounced';
import { NumberFieldStepButtons } from './number-field-step-buttons';

export const NumberField = Object.assign(NumberFieldRoot, {
  Root: NumberFieldRoot,
  RootDebounced: NumberFieldRootDebounced,
  FieldContainer,
  Label,
  Group: NumberFieldGroup,
  Input,
  StepButtons: NumberFieldStepButtons,
  IncrementButton: NumberFieldIncrementButton,
  DecrementButton: NumberFieldDecrementButton,
  Description,
  FieldError,
});
