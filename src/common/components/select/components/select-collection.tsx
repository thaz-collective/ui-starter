import type { CollectionProps as RACCollectionProps } from 'react-aria-components';
import { Collection as RACCollection } from 'react-aria-components';

export type CollectionProps<T extends object> = RACCollectionProps<T>;

export function Collection<T extends object>(props: CollectionProps<T>) {
  return <RACCollection {...props} />;
}
