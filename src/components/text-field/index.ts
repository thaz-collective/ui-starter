import { TextFieldRoot } from './text-field-root';
import { TextFieldRootDebounced } from './text-field-root-debounced';

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  RootDebounced: TextFieldRootDebounced,
});
