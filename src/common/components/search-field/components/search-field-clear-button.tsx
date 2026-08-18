import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { X } from 'lucide-react';
import { Button as RACButton, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useSearchFieldContext } from '#src/common/components/search-field/context';

const clearButtonVariants = tv({
  base: [
    'mr-2 flex shrink-0 items-center justify-center',
    'rounded-sm text-muted-foreground opacity-70',
    'transition-opacity',
    'data-[hovered]:opacity-100',
    'data-[disabled]:pointer-events-none',
    'group-data-[empty]/search-field-group:invisible',
    'data-[focus-visible]:ring-ring outline-none data-[focus-visible]:ring-1',
  ],
});

export type SearchFieldClearButtonProps = Omit<RACButtonProps, 'slot' | 'children'>;

export function ClearButton(props: SearchFieldClearButtonProps) {
  const context = useSearchFieldContext();

  if (context === undefined) {
    throw new Error(
      'SearchField.ClearButton must be used within a component that extends a SearchFieldContextProvider',
    );
  }

  const { slots } = context;

  return (
    <RACButton
      {...props}
      slot="clear"
      data-slot="clear-button"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const slotClassName = slots.clearButton({ ...props, ...renderProps, className });

        return clearButtonVariants({ className: slotClassName });
      })}
    >
      <X
        aria-hidden="true"
        className="size-4"
      />
    </RACButton>
  );
}
