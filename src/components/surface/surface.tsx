import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';

import type { SurfaceVariants } from './variant';
import { SurfaceVariantContext } from './context';
import { surfaceVariants } from './variant';

type SurfaceProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> & SurfaceVariants;

export function Surface(props: SurfaceProps) {
  const { variant = 'default' } = props;

  return (
    <SurfaceVariantContext value={variant}>
      <div
        {...props}
        className={surfaceVariants({ ...props, variant })}
      />
    </SurfaceVariantContext>
  );
}
