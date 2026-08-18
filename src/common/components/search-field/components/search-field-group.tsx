import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { Search } from 'lucide-react';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useSearchFieldContext } from '#src/common/components/search-field/context';

const groupVariants = tv({
  base: [
    'group/search-field-group',
    'relative flex items-center',
    'rounded-md',
    'bg-field',
    'transition-colors duration-150',

    'border border-field-border',
    'focus-within:border-primary hover:border-primary-hover',
  ],
});

const iconVariants = tv({
  base: ['ml-3 size-4 shrink-0 text-muted-foreground'],
});

export type SearchFieldGroupProps = RACGroupProps;

export function Group(props: SearchFieldGroupProps) {
  const context = useSearchFieldContext();

  if (context === undefined) {
    throw new Error('SearchField.Group must be used within a component that extends a SearchFieldContextProvider');
  }

  const { slots } = context;
  const { children: groupChildren, ...rest } = props;

  return (
    <RACGroup
      {...rest}
      data-slot="search-field-group"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const slotClassName = slots.group({ ...props, ...renderProps, className });

        return groupVariants({ className: slotClassName });
      })}
    >
      {composeRenderProps(groupChildren, (renderedChildren) => (
        <>
          <Search
            aria-hidden="true"
            className={iconVariants()}
          />
          {renderedChildren}
        </>
      ))}
    </RACGroup>
  );
}
