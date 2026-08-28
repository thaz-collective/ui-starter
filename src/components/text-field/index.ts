import { Description } from './text-field-description';
import { FieldError } from './text-field-field-error';
import { Input } from './text-field-input';
import { Label } from './text-field-label';
import { LabelInputContainer } from './text-field-label-input-container';
import { TextFieldRoot } from './text-field-root';
import { TextFieldRootDebounced } from './text-field-root-debounced';

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  RootDebounced: TextFieldRootDebounced,
  LabelInputContainer,
  Label,
  Input,
  Description,
  FieldError,
});
