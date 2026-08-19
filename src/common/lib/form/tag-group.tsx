import type { ReactNode } from 'react';

import type { FieldWithValue } from '@tanstack/react-form';

import type { TagGroupProps } from '#src/common/components/tag-group';
import { TagGroup } from '#src/common/components/tag-group';

// RAC's TagGroup models tag removal as an `onRemove(keys: Set<Key>)` event rather than a `string[]`
// `onChange`, so the adapter reduces the removal event back onto the field's `string[]` value itself.
export function TagGroupAdapter({
  field,
  label,
  description,
  ...rootProps
}: {
  field: FieldWithValue<string[]>;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<TagGroupProps, 'onRemove' | 'children'>) {
  const items = field.value.map((value) => ({ id: value, value }));

  return (
    <TagGroup.Root
      {...rootProps}
      onRemove={(keys) => {
        field.handleChange(field.value.filter((value) => !keys.has(value)));
      }}
    >
      {label && <TagGroup.Label>{label}</TagGroup.Label>}
      <TagGroup.List items={items}>{(item) => <TagGroup.Tag id={item.id}>{item.value}</TagGroup.Tag>}</TagGroup.List>
      {description && <TagGroup.Description>{description}</TagGroup.Description>}
      <TagGroup.FieldError>{field.errors.map((error) => error.message).join(', ')}</TagGroup.FieldError>
    </TagGroup.Root>
  );
}
