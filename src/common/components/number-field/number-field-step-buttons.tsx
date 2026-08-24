import type { ReactNode } from 'react';

import { tv } from 'tailwind-variants';

const stepButtonsVariants = tv({
  base: ['flex flex-col self-stretch overflow-hidden rounded-r-md border-l border-surface-tertiary'],
});

interface NumberFieldStepButtonsProps {
  children: ReactNode;
}

export function NumberFieldStepButtons({ children }: NumberFieldStepButtonsProps) {
  return <div className={stepButtonsVariants()}>{children}</div>;
}
