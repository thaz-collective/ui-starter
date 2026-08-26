import { CheckboxButton } from './checkbox-button';
import { CheckboxField } from './checkbox-field';
import { FieldError } from './checkbox-field-error';
import { CheckboxGroup } from './checkbox-group';
import { GroupDescription } from './checkbox-group-description';
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
