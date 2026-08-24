import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

const stepButtonsVariants = tv({
  base: ['flex flex-col self-stretch overflow-hidden rounded-r-md border-l border-surface-tertiary'],
});

type NumberFieldStepButtonsProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'>;

export function NumberFieldStepButtons(props: NumberFieldStepButtonsProps) {
  return (
    <div
      {...props}
      className={stepButtonsVariants({ className: props.className })}
    />
  );
}
