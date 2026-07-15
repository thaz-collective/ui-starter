import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';

import { labelVariants } from '#src/common/components/label/variants';

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      data-slot="label"
      className={labelVariants({ ...props })}
    />
  );
}
