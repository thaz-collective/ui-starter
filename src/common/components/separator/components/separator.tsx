import type { SeparatorProps as RACSeparatorProps } from 'react-aria-components';
import { Separator as RACSeparator } from 'react-aria-components';

import { separatorVariants } from '#src/common/components/separator/variants';

export type SeparatorProps = RACSeparatorProps;

export function Separator(props: SeparatorProps) {
  const { orientation = 'horizontal', className, ...rest } = props;

  return (
    <RACSeparator
      {...rest}
      orientation={orientation}
      data-slot="separator"
      className={separatorVariants({ orientation, className })}
    />
  );
}
