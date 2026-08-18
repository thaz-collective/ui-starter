import { Select as SelectRoot } from './components/select';
import { Collection } from './components/select-collection';
import { Description } from './components/select-description';
import { FieldError } from './components/select-field-error';
import { Header } from './components/select-header';
import { Item } from './components/select-item';
import { Label } from './components/select-label';
import { ListBox } from './components/select-list-box';
import { SelectPopover as Popover } from './components/select-popover';
import { Section } from './components/select-section';
import { Trigger } from './components/select-trigger';
import { Value } from './components/select-value';

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Label,
  Trigger,
  Value,
  Popover,
  ListBox,
  Item,
  Header,
  Section,
  Collection,
  Description,
  FieldError,
});

export type { SelectProps } from './components/select';
export type { CollectionProps } from './components/select-collection';
export type { DescriptionProps } from './components/select-description';
export type { FieldErrorProps } from './components/select-field-error';
export type { HeaderProps } from './components/select-header';
export type { ItemProps } from './components/select-item';
export type { LabelProps } from './components/select-label';
export type { ListBoxProps } from './components/select-list-box';
export type { SelectPopoverProps } from './components/select-popover';
export type { SectionProps } from './components/select-section';
export type { TriggerProps } from './components/select-trigger';
export type { ValueProps } from './components/select-value';

export type { RequiredSelectVariants, SelectVariants, SlotsSelectVariants } from './variants';
export { selectVariants } from './variants';
