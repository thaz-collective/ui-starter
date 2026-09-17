import type { ComponentPropsWithRef } from 'react';

import { X } from 'lucide-react';

import { Button } from '#src/components/button';

type AlertCloseButtonProps = Omit<ComponentPropsWithRef<typeof Button>, 'children' | 'variant' | 'isIcon'>;

export function AlertCloseButton(props: AlertCloseButtonProps) {
  return (
    <Button
      aria-label="Dismiss"
      size="sm"
      {...props}
      variant="ghost"
      isIcon={true}
    >
      <X className="size-4" />
    </Button>
  );
}
