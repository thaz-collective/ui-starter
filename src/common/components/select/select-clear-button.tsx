import type { ComponentPropsWithRef } from 'react';
import { use } from 'react';

import { X } from 'lucide-react';
import { Button as RACButton, composeRenderProps, SelectStateContext } from 'react-aria-components';
import { cn } from 'tailwind-variants';

interface SelectClearButtonProps extends Omit<ComponentPropsWithRef<typeof RACButton>, 'children' | 'slot'> {
  iconProps?: ComponentPropsWithRef<typeof X>;
}

export function SelectClearButton(props: SelectClearButtonProps) {
  const { iconProps, onPress, ...buttonProps } = props;

  const state = use(SelectStateContext);

  if (state === null || state.selectionManager.selectedKeys.size === 0) {
    return null;
  }

  return (
    <RACButton
      {...buttonProps}
      slot={null}
      onPress={(e) => {
        if (onPress) {
          onPress(e);
        }

        if (state.selectionManager.selectionMode === 'multiple') {
          state.setValue([]);
        } else {
          state.setValue(null);
        }
      }}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/button-clear',

            'flex size-6 shrink-0 cursor-default items-center justify-center rounded outline-none',

            'text-muted-foreground',

            'transition-colors duration-150',

            'data-hovered:bg-danger/10 data-hovered:text-danger',

            'data-focus-visible:ring-1 data-focus-visible:ring-primary',

            'data-disabled:cursor-not-allowed data-disabled:opacity-50',

            'group-data-[disabled="true"]/select:hidden',

            className,
          ) ?? ''
        );
      })}
    >
      <X
        {...iconProps}
        className={
          cn(
            'size-4 shrink-0 self-center',

            iconProps?.className,
          ) ?? ''
        }
      />
    </RACButton>
  );
}
