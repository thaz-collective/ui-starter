import { Description } from '#src/components/description';
import { FieldContainer } from '#src/components/field-container';
import { FieldError } from '#src/components/field-error';
import { Input } from '#src/components/input';
import { Label } from '#src/components/label';

import { TextFieldRoot } from './text-field-root';
import { TextFieldRootDebounced } from './text-field-root-debounced';

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  RootDebounced: TextFieldRootDebounced,
  FieldContainer,
  Label,
  Input,
  Description,
  FieldError,
});
