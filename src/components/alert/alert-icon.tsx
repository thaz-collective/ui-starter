import type { ComponentPropsWithRef } from 'react';

import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react';
import { cn } from 'tailwind-variants';

import { useAlertVariant } from './alert-context';

type IconProps = ComponentPropsWithRef<typeof Info>;

interface AlertIconProps extends ComponentPropsWithRef<'div'> {
  iconProps?: IconProps;
}

export function AlertIcon(props: AlertIconProps) {
  const { iconProps, children } = props;

  if (children) {
    return <AlertIconWrapper>{children}</AlertIconWrapper>;
  }

  return (
    <AlertIconWrapper>
      <AlertIconDefault {...iconProps} />
    </AlertIconWrapper>
  );
}

function AlertIconWrapper(props: AlertIconProps) {
  return (
    <div
      {...props}
      className={cn('group/alert-icon shrink-0') ?? ''}
    />
  );
}

function AlertIconDefault(props: IconProps) {
  const variant = useAlertVariant();

  if (variant === 'default') {
    return (
      <Info
        {...props}
        className={cn('size-4', props?.className) ?? ''}
      />
    );
  }

  if (variant === 'success') {
    return (
      <CircleCheck
        {...props}
        className={cn('size-4', props?.className) ?? ''}
      />
    );
  }

  if (variant === 'warning') {
    return (
      <TriangleAlert
        {...props}
        className={cn('size-4', props?.className) ?? ''}
      />
    );
  }

  return (
    <CircleAlert
      {...props}
      className={cn('size-4', props?.className) ?? ''}
    />
  );
}
