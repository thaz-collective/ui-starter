import type { ReactNode } from 'react';

interface NumberFieldStepButtonsProps {
  children: ReactNode;
}

export function NumberFieldStepButtons({ children }: NumberFieldStepButtonsProps) {
  return (
    <div className="flex flex-col self-stretch overflow-hidden rounded-r-md border-l border-surface-tertiary">
      {children}
    </div>
  );
}
