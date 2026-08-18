import type { ReactNode } from 'react';

import type { SearchFieldProps as RACSearchFieldProps } from 'react-aria-components';
import { composeRenderProps, SearchField as RACSearchField } from 'react-aria-components';

import type { SearchFieldVariants } from '#src/common/components/search-field/variants';
import { useSearchFieldContext } from '#src/common/components/search-field/context';

import { SearchFieldContextProvider } from './search-field-context-provider';

export interface SearchFieldProps extends RACSearchFieldProps, SearchFieldVariants {
  children: ReactNode;
}

export function SearchField(props: SearchFieldProps) {
  return (
    <SearchFieldContextProvider {...props}>
      <SearchFieldInner {...props} />
    </SearchFieldContextProvider>
  );
}

function SearchFieldInner(props: SearchFieldProps) {
  const context = useSearchFieldContext();

  if (context === undefined) {
    throw new Error('SearchField must be used within a component that extends a SearchFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACSearchField
      {...props}
      data-slot="search-field"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
