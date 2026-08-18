import { ChevronsUpDown } from 'lucide-react';
import { composeRenderProps } from 'react-aria-components';

import type { ButtonRootProps } from '#src/common/components/button';
import { Button } from '#src/common/components/button';
import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type TriggerButtonProps = Omit<ButtonRootProps, 'children' | 'variant' | 'size'>;

export function TriggerButton(props: TriggerButtonProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.TriggerButton must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <Button
      {...props}
      variant="ghost"
      size="smIcon"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.triggerButton({ ...props, ...renderProps, className });
      })}
    >
      <ChevronsUpDown
        aria-hidden="true"
        className="size-4 opacity-50"
      />
    </Button>
  );
}
