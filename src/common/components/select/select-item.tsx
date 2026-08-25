import type { ComponentPropsWithRef } from 'react';

import { Check } from 'lucide-react';
import { composeRenderProps, ListBoxItem as RACListBoxItem } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const itemVariants = tv({
  base: [
    'relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none',
    'data-disabled:pointer-events-none data-disabled:opacity-50',
    'data-focus-visible:ring-1 data-focus-visible:ring-primary',
    'data-focused:bg-muted data-focused:text-foreground',
    'data-hovered:bg-muted data-hovered:text-foreground',
    'data-selected:bg-muted data-selected:text-foreground',
    'data-selection-mode:pr-8',
  ],
});

const checkIndicatorVariants = tv({
  base: ['absolute right-2 flex size-4 items-center justify-center'],
});

type SelectItemProps<T extends object> = ComponentPropsWithRef<typeof RACListBoxItem<T>>;

export function SelectItem<T extends object>(props: SelectItemProps<T>) {
  const { children, textValue, ...rest } = props;

  let resolvedTextValue = textValue;

  if (resolvedTextValue === undefined && typeof children === 'string') {
    resolvedTextValue = children;
  }

  const itemProps: Pick<SelectItemProps<T>, 'textValue'> = {};

  if (resolvedTextValue !== undefined) {
    itemProps.textValue = resolvedTextValue;
  }

  return (
    <RACListBoxItem
      {...rest}
      {...itemProps}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return itemVariants({ ...props, ...renderProps, className });
      })}
    >
      {composeRenderProps(children, (renderedChildren, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className={checkIndicatorVariants()}>
              <Check className="size-4" />
            </span>
          )}
          {renderedChildren}
        </>
      ))}
    </RACListBoxItem>
  );
}
