import { Description } from './checkbox-description';
import { FieldError } from './checkbox-field-error';
import { CheckboxGroup } from './checkbox-group';
import { CheckboxGroupItem } from './checkbox-group-item';
import { Label } from './checkbox-label';
import { CheckboxRoot } from './checkbox-root';

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Group: CheckboxGroup,
  GroupItem: CheckboxGroupItem,
  Label,
  Description,
  FieldError,
});
