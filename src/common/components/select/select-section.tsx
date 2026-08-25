import type { ComponentPropsWithRef } from 'react';

import { ListBoxSection as RACListBoxSection } from 'react-aria-components';

type SelectSectionProps<T extends object> = ComponentPropsWithRef<typeof RACListBoxSection<T>>;

export function SelectSection<T extends object>(props: SelectSectionProps<T>) {
  return <RACListBoxSection {...props} />;
}
