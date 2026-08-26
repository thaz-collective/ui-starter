import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, SearchField as RACSearchField } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const searchFieldVariants = tv({
  base: ['m-1'],
});

type SelectSearchFieldProps = SetRequired<ComponentPropsWithRef<typeof RACSearchField>, 'children'> &
  VariantProps<typeof searchFieldVariants>;

export function SelectSearchField(props: SelectSearchFieldProps) {
  return (
    <RACSearchField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return searchFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
