import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

type NumberFieldStepButtonsProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function NumberFieldStepButtons(props: NumberFieldStepButtonsProps) {
  return (
    <div
      {...props}
      className={
        cn('flex flex-col self-stretch overflow-hidden rounded-r-md border-l border-field-border', props.className) ??
        ''
      }
    />
  );
}
