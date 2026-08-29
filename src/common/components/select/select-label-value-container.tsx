import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type LabelValueContainerProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function LabelValueContainer(props: LabelValueContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        'relative flex min-w-0 flex-1 items-center',

        'pt-5 pb-1.5',

        props.className,
      )}
    />
  );
}
