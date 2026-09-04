import { CheckboxButton } from '#src/components/checkbox';
import { Description } from '#src/components/description';
import { FieldError } from '#src/components/field-error';

import { CheckboxGroupField } from './checkbox-group-field';
import { CheckboxGroupLabel } from './checkbox-group-label';
import { CheckboxGroupRoot } from './checkbox-group-root';

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
  Label: CheckboxGroupLabel,
  Description,
  FieldError,
  Field: CheckboxGroupField,
  Button: CheckboxButton,
});
