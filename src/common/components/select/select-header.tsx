import type { ComponentPropsWithRef } from 'react';

import { Header as RACHeader } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const headerVariants = tv({
  base: ['px-2 py-1.5 text-sm font-semibold text-foreground'],
});

type SelectHeaderProps = ComponentPropsWithRef<typeof RACHeader>;

export function SelectHeader(props: SelectHeaderProps) {
  return (
    <RACHeader
      {...props}
      className={headerVariants({ ...props })}
    />
  );
}
