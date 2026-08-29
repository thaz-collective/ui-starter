import type { ComponentPropsWithRef } from 'react';

import { X } from 'lucide-react';
import {
  composeRenderProps,
  SelectValue as RACSelectValue,
  Button as RACButton,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagList as RACTagList,
} from 'react-aria-components';
import { cn } from 'tailwind-variants';

interface SelectValueProps<T extends object> extends Omit<ComponentPropsWithRef<typeof RACSelectValue<T>>, 'children'> {
  tagGroupProps?: Omit<ComponentPropsWithRef<typeof RACTagGroup>, 'children'>;
  tagListProps?: Omit<ComponentPropsWithRef<typeof RACTagList>, 'children' | 'items'>;
  tagProps?: Omit<ComponentPropsWithRef<typeof RACTag>, 'children' | 'textValue'>;
  tagButtonProps?: Omit<ComponentPropsWithRef<typeof RACButton>, 'children' | 'slot'>;
}

export function SelectValue<T extends object>(props: SelectValueProps<T>) {
  const { tagGroupProps, tagListProps, tagProps, tagButtonProps, ...selectValueProps } = props;

  return (
    <RACSelectValue
      {...selectValueProps}
      className={composeRenderProps(selectValueProps.className, (className) => {
        return (
          cn(
            'min-w-0 flex-1 truncate',

            'data-placeholder:text-muted-foreground',

            'transition-opacity duration-150',
            'data-placeholder:opacity-0',
            'group-data-open/select:data-placeholder:opacity-100',

            className,
          ) ?? ''
        );
      })}
    >
      {(renderProps) => {
        if (!renderProps.isPlaceholder && renderProps.state.selectionManager.selectionMode === 'multiple') {
          return (
            <span
              className="contents"
              data-has-value={!renderProps.isPlaceholder}
            >
              <RACTagGroup
                {...tagGroupProps}
                aria-label={tagGroupProps?.['aria-label'] ?? 'Selected options'}
                onRemove={(keys) => {
                  if (tagGroupProps?.onRemove) {
                    tagGroupProps.onRemove(keys);
                  }
                  for (const key of keys) {
                    renderProps.state.selectionManager.toggleSelection(key);
                  }
                }}
              >
                <RACTagList
                  {...tagListProps}
                  items={renderProps.state.selectedItems}
                  className={cn('flex flex-1 flex-wrap items-center gap-1.5 py-1', tagListProps?.className) ?? ''}
                >
                  {(item) => (
                    <RACTag
                      {...tagProps}
                      textValue={item.textValue}
                      className={
                        cn(
                          'flex items-center gap-1 rounded-md border border-field-border py-0.5 pr-1 pl-2 text-xs font-medium text-foreground',
                          'bg-transparent transition-colors duration-150',
                          'outline-none',
                          'data-hovered:bg-surface-muted data-hovered:border-primary-hover',
                          'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary',
                          'data-disabled:opacity-50',

                          tagProps?.className,
                        ) ?? ''
                      }
                    >
                      {item.textValue}
                      <RACButton
                        {...tagButtonProps}
                        slot="remove"
                        className={
                          cn(
                            'flex items-center justify-center rounded-sm p-0.5 text-muted-foreground outline-none',
                            'transition-colors duration-150',
                            'data-hovered:bg-danger/10 data-hovered:text-danger',
                            'data-focus-visible:ring-1 data-focus-visible:ring-primary',

                            tagButtonProps?.className,
                          ) ?? ''
                        }
                      >
                        <X className="size-3" />
                      </RACButton>
                    </RACTag>
                  )}
                </RACTagList>
              </RACTagGroup>
            </span>
          );
        }

        return (
          <span
            className="contents"
            data-has-value={!renderProps.isPlaceholder}
          >
            {renderProps.selectedText || renderProps.defaultChildren}
          </span>
        );
      }}
    </RACSelectValue>
  );
}
