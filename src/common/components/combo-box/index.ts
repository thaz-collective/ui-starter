import { ComboBox as ComboBoxRoot } from './components/combo-box';
import { Collection } from './components/combo-box-collection';
import { Description } from './components/combo-box-description';
import { FieldError } from './components/combo-box-field-error';
import { Group } from './components/combo-box-group';
import { Header } from './components/combo-box-header';
import { Input } from './components/combo-box-input';
import { Item } from './components/combo-box-item';
import { Label } from './components/combo-box-label';
import { ListBox } from './components/combo-box-list-box';
import { ComboBoxPopover as Popover } from './components/combo-box-popover';
import { Section } from './components/combo-box-section';
import { TriggerButton } from './components/combo-box-trigger-button';

export const ComboBox = Object.assign(ComboBoxRoot, {
  Root: ComboBoxRoot,
  Label,
  Group,
  Input,
  TriggerButton,
  Popover,
  ListBox,
  Item,
  Header,
  Section,
  Collection,
  Description,
  FieldError,
});

export type { ComboBoxProps } from './components/combo-box';
export type { CollectionProps } from './components/combo-box-collection';
export type { DescriptionProps } from './components/combo-box-description';
export type { FieldErrorProps } from './components/combo-box-field-error';
export type { GroupProps } from './components/combo-box-group';
export type { HeaderProps } from './components/combo-box-header';
export type { InputProps } from './components/combo-box-input';
export type { ItemProps } from './components/combo-box-item';
export type { LabelProps } from './components/combo-box-label';
export type { ListBoxProps } from './components/combo-box-list-box';
export type { ComboBoxPopoverProps } from './components/combo-box-popover';
export type { SectionProps } from './components/combo-box-section';
export type { TriggerButtonProps } from './components/combo-box-trigger-button';

export type { ComboBoxVariants, RequiredComboBoxVariants, SlotsComboBoxVariants } from './variants';
export { comboBoxVariants } from './variants';
