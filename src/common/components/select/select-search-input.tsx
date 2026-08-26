import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, Input as RACInput } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const searchInputVariants = tv({
  base: [
    'w-full min-w-0',
    'rounded-md px-2 py-1.5',
    'bg-field',
    'text-sm text-foreground',
    'border border-field-border',
    'outline-none',
    'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',
    'placeholder:text-muted-foreground',
  ],
});

type SelectSearchInputProps = ComponentPropsWithRef<typeof RACInput> & VariantProps<typeof searchInputVariants>;

export function SelectSearchInput(props: SelectSearchInputProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return searchInputVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
