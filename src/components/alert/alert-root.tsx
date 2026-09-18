import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { tv } from 'tailwind-variants';

import { AlertVariantContext } from './alert-context';

const DEFAULT_VARIANT = 'default';

const alertVariants = tv({
  base: 'group/alert relative flex w-full items-start gap-3 rounded-lg border p-4 text-sm',
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    isInverted: true,
  },
  variants: {
    variant: {
      default: 'border-surface-border bg-surface text-surface-foreground',
      success: 'border-success-border',
      warning: 'border-warning-border',
      danger: 'border-danger-border',
    },
    isInverted: { true: '', false: '' },
  },
  compoundVariants: [
    {
      variant: 'success',
      isInverted: true,
      className: 'bg-success-inv text-success-inv-foreground',
    },
    {
      variant: 'success',
      isInverted: false,
      className: 'bg-success text-success-foreground',
    },
    {
      variant: 'warning',
      isInverted: true,
      className: 'bg-warning-inv text-warning-inv-foreground',
    },
    {
      variant: 'warning',
      isInverted: false,
      className: 'bg-warning text-warning-foreground',
    },
    {
      variant: 'danger',
      isInverted: true,
      className: 'bg-danger-inv text-danger-inv-foreground',
    },
    {
      variant: 'danger',
      isInverted: false,
      className: 'bg-danger text-danger-foreground',
    },
  ],
});

type AlertRootProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> & VariantProps<typeof alertVariants>;

export function AlertRoot(props: AlertRootProps) {
  const { variant = DEFAULT_VARIANT, role, ...rest } = props;

  let defaultRole = 'status';

  if (variant === 'danger' || variant === 'warning') {
    defaultRole = 'alert';
  }

  return (
    <AlertVariantContext value={variant}>
      <div
        {...rest}
        role={role ?? defaultRole}
        className={alertVariants({ ...props, variant })}
      />
    </AlertVariantContext>
  );
}
