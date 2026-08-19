import type { ListBoxSectionProps as RACSectionProps } from 'react-aria-components';
import { ListBoxSection as RACSection } from 'react-aria-components';

export type SectionProps<T extends object> = RACSectionProps<T>;

export function Section<T extends object>(props: SectionProps<T>) {
  return <RACSection {...props} />;
}
