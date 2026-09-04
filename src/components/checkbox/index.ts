import { Description } from '#src/components/description';
import { FieldError } from '#src/components/field-error';

import { CheckboxButton } from './checkbox-button';
import { CheckboxRoot } from './checkbox-root';

export { CheckboxButton } from './checkbox-button';
export { CheckboxFieldBase } from './checkbox-field-base';

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Button: CheckboxButton,
  Description,
  FieldError,
});
