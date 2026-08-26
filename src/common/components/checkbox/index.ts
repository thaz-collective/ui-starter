import { CheckboxButton } from './checkbox-button';
import { GroupDescription } from './checkbox-description';
import { CheckboxField } from './checkbox-field';
import { FieldError } from './checkbox-field-error';
import { CheckboxGroup } from './checkbox-group';
import { CheckboxGroupField } from './checkbox-group-field';
import { GroupLabel } from './checkbox-group-label';

export const Checkbox = Object.assign(CheckboxField, {
  Field: CheckboxField,
  Button: CheckboxButton,
  Group: CheckboxGroup,
  GroupField: CheckboxGroupField,
  GroupLabel,
  GroupDescription,
  FieldError,
});
