import { SelectCollection } from './select-collection';
import { Description } from './select-description';
import { FieldError } from './select-field-error';
import { SelectHeader } from './select-header';
import { SelectItem } from './select-item';
import { Label } from './select-label';
import { SelectListBox } from './select-list-box';
import { SelectPopover } from './select-popover';
import { SelectRoot } from './select-root';
import { SelectSection } from './select-section';
import { SelectTrigger } from './select-trigger';
import { SelectValue } from './select-value';

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Label,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Popover: SelectPopover,
  ListBox: SelectListBox,
  Item: SelectItem,
  Header: SelectHeader,
  Section: SelectSection,
  Collection: SelectCollection,
  Description,
  FieldError,
});
