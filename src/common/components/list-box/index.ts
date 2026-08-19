import { ListBox as ListBoxRoot } from './components/list-box';
import { Collection } from './components/list-box-collection';
import { Header } from './components/list-box-header';
import { Item } from './components/list-box-item';
import { Section } from './components/list-box-section';

export const ListBox = Object.assign(ListBoxRoot, {
  Root: ListBoxRoot,
  Item,
  Header,
  Section,
  Collection,
});

export type { ListBoxProps } from './components/list-box';
export type { ItemProps } from './components/list-box-item';
export type { HeaderProps } from './components/list-box-header';
export type { SectionProps } from './components/list-box-section';
export type { CollectionProps } from './components/list-box-collection';

export type { ListBoxVariants, SlotsListBoxVariants, RequiredListBoxVariants } from './variants';
export { listBoxVariants } from './variants';
