import type { TagProps as RACTagProps, TagRenderProps } from 'react-aria-components';
import { X } from 'lucide-react';
import { Button as RACButton, composeRenderProps, Tag as RACTag } from 'react-aria-components';

import type { SlotsTagGroupVariants } from '#src/common/components/tag-group/variants';
import { useTagGroupContext } from '#src/common/components/tag-group/context';

export type TagGroupTagProps = RACTagProps;

function resolveTagVariantClassName(renderProps: TagRenderProps, slots: SlotsTagGroupVariants) {
  if (renderProps.selectionMode === 'none' || renderProps.isSelected) {
    return slots.tagDefault();
  }

  return slots.tagSecondary();
}

function TagRemoveButton(props: { allowsRemoving: boolean; removeButtonClassName: string }) {
  if (!props.allowsRemoving) {
    return null;
  }

  return (
    <RACButton
      slot="remove"
      className={props.removeButtonClassName}
    >
      <X
        aria-hidden="true"
        className="size-3"
      />
    </RACButton>
  );
}

export function Tag(props: TagGroupTagProps) {
  const context = useTagGroupContext();

  if (context === undefined) {
    throw new Error('TagGroup.Tag must be used within a component that extends a TagGroupContextProvider');
  }

  const { slots } = context;

  const { children: tagChildren, textValue, ...rest } = props;

  let resolvedTextValue = textValue;

  if (resolvedTextValue === undefined && typeof tagChildren === 'string') {
    resolvedTextValue = tagChildren;
  }

  const tagProps: Pick<TagGroupTagProps, 'textValue'> = {};

  if (resolvedTextValue !== undefined) {
    tagProps.textValue = resolvedTextValue;
  }

  return (
    <RACTag
      {...rest}
      {...tagProps}
      data-slot="tag"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const variantClassName = resolveTagVariantClassName(renderProps, slots);
        const tagClassName = [variantClassName, className];

        if (renderProps.allowsRemoving) {
          tagClassName.push('pr-1');
        }

        return slots.tag({ className: tagClassName });
      })}
    >
      {composeRenderProps(tagChildren, (renderedChildren, renderProps) => (
        <>
          {renderedChildren}
          <TagRemoveButton
            allowsRemoving={renderProps.allowsRemoving}
            removeButtonClassName={slots.removeButton()}
          />
        </>
      ))}
    </RACTag>
  );
}
