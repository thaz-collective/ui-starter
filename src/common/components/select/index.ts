import { SelectAutocomplete } from './select-autocomplete';
import { SelectClearButton } from './select-clear-button';
import { SelectCollection } from './select-collection';
import { Description } from './select-description';
import { FieldError } from './select-field-error';
import { SelectHeader } from './select-header';
import { SelectItem } from './select-item';
import { Label } from './select-label';
import { LabelValueContainer } from './select-label-value-container';
import { SelectListBox } from './select-list-box';
import { SelectPopover } from './select-popover';
import { SelectRoot } from './select-root';
import { SelectSearchField } from './select-search-field';
import { SelectSearchInput } from './select-search-input';
import { SelectSection } from './select-section';
import { SelectTriggerButton } from './select-trigger-button';
import { SelectTriggerGroup } from './select-trigger-group';
import { SelectValue } from './select-value';

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  TriggerGroup: SelectTriggerGroup,
  TriggerButton: SelectTriggerButton,
  ClearButton: SelectClearButton,
  LabelValueContainer,
  Label,
  Value: SelectValue,
  Popover: SelectPopover,
  ListBox: SelectListBox,
  Item: SelectItem,
  Header: SelectHeader,
  Section: SelectSection,
  Collection: SelectCollection,
  Description,
  FieldError,
  Autocomplete: SelectAutocomplete,
  SearchField: SelectSearchField,
  SearchInput: SelectSearchInput,
});
