import type { SectionProps as RACSectionProps } from 'react-aria-components';
import { Section as RACSection } from 'react-aria-components';

export type SectionProps<T extends object> = RACSectionProps<T>;

export function Section<T extends object>(props: SectionProps<T>) {
  // oxlint-disable-next-line no-deprecated -- RAC's `Section` is deprecated in favor of newer collection primitives not yet adopted by this library's plans.
  return <RACSection {...props} />;
}
