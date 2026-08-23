import { TextField as TextFieldRoot } from './components/text-field';
import { TextFieldRootDebounced } from './components/text-field-debounced';
import { Description } from './components/text-field-description';
import { FieldError } from './components/text-field-field-error';
import { Input } from './components/text-field-input';
import { Label } from './components/text-field-label';
import { LabelInputContainer } from './components/text-field-label-input-container';
import { TextArea } from './components/text-field-text-area';

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  RootDebounced: TextFieldRootDebounced,
  LabelInputContainer,
  Label,
  Input,
  TextArea,
  Description,
  FieldError,
});

export type { TextFieldProps } from './components/text-field';

export type { TextFieldVariants, SlotsTextFieldVariants, RequiredTextFieldVariants } from './variants';
export { textFieldVariants } from './variants';
