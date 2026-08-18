import { Radio } from './components/radio';
import { RadioGroup as RadioGroupRoot } from './components/radio-group';
import { Description } from './components/radio-group-description';
import { FieldError } from './components/radio-group-field-error';
import { Label } from './components/radio-group-label';

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Radio,
  Label,
  Description,
  FieldError,
});

export type { RadioGroupProps } from './components/radio-group';
export type { RadioProps } from './components/radio';

export type { RadioGroupVariants, SlotsRadioGroupVariants, RequiredRadioGroupVariants } from './variants';
export { radioGroupVariants } from './variants';
