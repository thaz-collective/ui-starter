import { TagGroup as TagGroupRoot } from './components/tag-group';
import { Description } from './components/tag-group-description';
import { FieldError } from './components/tag-group-field-error';
import { Label } from './components/tag-group-label';
import { List } from './components/tag-group-list';
import { Tag } from './components/tag-group-tag';

export const TagGroup = Object.assign(TagGroupRoot, {
  Root: TagGroupRoot,
  List,
  Tag,
  Label,
  Description,
  FieldError,
});

export type { TagGroupProps } from './components/tag-group';

export type { TagGroupVariants, SlotsTagGroupVariants, RequiredTagGroupVariants } from './variants';
export { tagGroupVariants } from './variants';
