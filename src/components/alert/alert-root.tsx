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
  },
  variants: {
    variant: {
      default: 'border-surface-border bg-surface text-surface-foreground',
      success: 'border-success-border bg-success-inv text-success-inv-foreground',
      warning: 'border-warning-border bg-warning-inv text-warning-inv-foreground',
      danger: 'border-danger-border bg-danger-inv text-danger-inv-foreground',
    },
  },
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
