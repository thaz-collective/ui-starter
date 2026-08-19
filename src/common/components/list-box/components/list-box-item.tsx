import type { ListBoxItemProps as RACListBoxItemProps } from 'react-aria-components';
import { Check } from 'lucide-react';
import { composeRenderProps, ListBoxItem as RACListBoxItem } from 'react-aria-components';

import { listBoxVariants } from '#src/common/components/list-box/variants';

export type ItemProps<T extends object> = RACListBoxItemProps<T>;

export function Item<T extends object>(props: ItemProps<T>) {
  const { item, checkIndicator } = listBoxVariants();

  const { children, textValue, className, ...rest } = props;

  let resolvedTextValue = textValue;

  if (resolvedTextValue === undefined && typeof children === 'string') {
    resolvedTextValue = children;
  }

  const itemProps: Pick<ItemProps<T>, 'textValue'> = {};

  if (resolvedTextValue !== undefined) {
    itemProps.textValue = resolvedTextValue;
  }

  return (
    <RACListBoxItem
      {...rest}
      {...itemProps}
      data-slot="item"
      className={composeRenderProps(className, (composedClassName, renderProps) => {
        return item({ ...renderProps, className: composedClassName });
      })}
    >
      {composeRenderProps(children, (renderedChildren, renderProps) => (
        <>
          <ItemCheckIndicator
            isSelected={renderProps.isSelected}
            checkIndicatorClassName={checkIndicator()}
          />
          {renderedChildren}
        </>
      ))}
    </RACListBoxItem>
  );
}

function ItemCheckIndicator(props: { isSelected: boolean; checkIndicatorClassName: string }) {
  if (!props.isSelected) {
    return null;
  }

  return (
    <span className={props.checkIndicatorClassName}>
      <Check className="size-4" />
    </span>
  );
}
