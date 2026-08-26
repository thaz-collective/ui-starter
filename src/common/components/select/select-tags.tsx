import type { SelectState } from 'react-aria-components';
import { X } from 'lucide-react';
import {
  Button as RACButton,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagList as RACTagList,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

const tagListVariants = tv({
  base: ['flex flex-1 flex-wrap items-center gap-1.5 py-1'],
});

const tagVariants = tv({
  base: [
    'flex items-center gap-1 rounded-md border border-field-border py-0.5 pr-1 pl-2 text-xs font-medium text-foreground',
    'bg-transparent transition-colors duration-150',
    'outline-none',
    'data-hovered:bg-surface-muted data-hovered:border-primary-hover',
    'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary',
    'data-disabled:opacity-50',
  ],
});

const tagRemoveButtonVariants = tv({
  base: [
    'flex items-center justify-center rounded-sm p-0.5 text-muted-foreground outline-none',
    'transition-colors duration-150',
    'data-hovered:bg-danger/10 data-hovered:text-danger',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary',
  ],
});

interface SelectTagsProps<T extends object> {
  'aria-label': string;
  state: SelectState<T, 'single' | 'multiple'>;
}

export function SelectTags<T extends object>(props: SelectTagsProps<T>) {
  const { state, ...tagGroupProps } = props;

  return (
    <RACTagGroup
      {...tagGroupProps}
      onRemove={(keys) => {
        for (const key of keys) {
          state.selectionManager.toggleSelection(key);
        }
      }}
    >
      <RACTagList
        items={state.selectedItems}
        className={tagListVariants()}
      >
        {(item) => (
          <RACTag
            textValue={item.textValue}
            className={tagVariants()}
          >
            {item.textValue}
            <RACButton
              slot="remove"
              className={tagRemoveButtonVariants()}
            >
              <X className="size-3" />
            </RACButton>
          </RACTag>
        )}
      </RACTagList>
    </RACTagGroup>
  );
}
