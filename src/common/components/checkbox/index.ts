import { Checkbox as CheckboxRoot } from './components/checkbox';
import { Description } from './components/checkbox-description';
import { FieldError } from './components/checkbox-field-error';
import { CheckboxGroup as Group } from './components/checkbox-group';
import { Label } from './components/checkbox-label';

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Group,
  Label,
  Description,
  FieldError,
});

export type { CheckboxProps } from './components/checkbox';
export type { CheckboxGroupProps } from './components/checkbox-group';

export type { CheckboxVariants, SlotsCheckboxVariants, RequiredCheckboxVariants } from './variants';
export { checkboxVariants } from './variants';
