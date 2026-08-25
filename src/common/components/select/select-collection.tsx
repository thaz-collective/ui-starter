import type { ComponentPropsWithRef } from 'react';

import { Collection as RACCollection } from 'react-aria-components';

type SelectCollectionProps<T extends object> = ComponentPropsWithRef<typeof RACCollection<T>>;

export function SelectCollection<T extends object>(props: SelectCollectionProps<T>) {
  return <RACCollection {...props} />;
}
