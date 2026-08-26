import type { ComponentPropsWithRef } from 'react';

import { Autocomplete as RACAutocomplete, useFilter } from 'react-aria-components';

type SelectAutocompleteProps<T extends object> = Omit<ComponentPropsWithRef<typeof RACAutocomplete<T>>, 'filter'> &
  Partial<Pick<ComponentPropsWithRef<typeof RACAutocomplete<T>>, 'filter'>>;

export function SelectAutocomplete<T extends object>(props: SelectAutocompleteProps<T>) {
  const { filter } = props;
  const { contains } = useFilter({ sensitivity: 'base' });

  return (
    <RACAutocomplete
      {...props}
      filter={filter ?? contains}
    />
  );
}
