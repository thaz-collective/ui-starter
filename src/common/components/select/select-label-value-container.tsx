import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const labelValueContainerVariants = tv({
  base: ['relative flex min-w-0 flex-1 items-center', 'pt-5 pb-1.5'],
});

type LabelValueContainerProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> &
  VariantProps<typeof labelValueContainerVariants>;

export function LabelValueContainer(props: LabelValueContainerProps) {
  return (
    <div
      {...props}
      className={labelValueContainerVariants({ ...props })}
    />
  );
}
