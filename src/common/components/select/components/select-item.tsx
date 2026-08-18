import type { ListBoxItemProps as RACListBoxItemProps } from 'react-aria-components';
import { Check } from 'lucide-react';
import { composeRenderProps, ListBoxItem as RACListBoxItem } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type ItemProps<T extends object> = RACListBoxItemProps<T>;

export function Item<T extends object>(props: ItemProps<T>) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Item must be used within a component that extends a SelectContextProvider');
  }

  const { slots } = context;

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
        return slots.item({ ...props, ...renderProps, className: composedClassName });
      })}
    >
      {composeRenderProps(children, (renderedChildren, renderProps) => (
        <>
          <SelectItemCheckIndicator
            isSelected={renderProps.isSelected}
            checkIndicatorClassName={slots.checkIndicator({})}
          />
          {renderedChildren}
        </>
      ))}
    </RACListBoxItem>
  );
}

function SelectItemCheckIndicator(props: { isSelected: boolean; checkIndicatorClassName: string }) {
  if (!props.isSelected) {
    return null;
  }

  return (
    <span className={props.checkIndicatorClassName}>
      <Check className="size-4" />
    </span>
  );
}
