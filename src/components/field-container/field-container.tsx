import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { cn } from 'tailwind-variants';

import type { SurfaceVariants } from '#src/components/surface';
import { useSurfaceVariant, surfaceVariants } from '#src/components/surface';

type FieldContainerProps = SetRequired<ComponentPropsWithRef<'div'>, 'children'> & SurfaceVariants;

export function FieldContainer(props: FieldContainerProps) {
  const { variant } = props;

  const { nestedVariant } = useSurfaceVariant();

  return (
    <div
      {...props}
      className={
        cn(
          surfaceVariants({ ...props, variant: variant ?? nestedVariant }),

          'group/field-container relative flex items-stretch rounded-md border border-field-border bg-field text-field-foreground transition-colors duration-150 focus-within:border-primary-border hover:border-primary-hover',

          // TODO - Change color or adjust size on focus?
          'group-data-[invalid="true"]/field:border-danger/90 group-data-[invalid="true"]/field:focus-within:border-danger group-data-[invalid="true"]/field:hover:border-danger-hover',

          // TODO - Any adjustments to the disabled state?
          'group-data-[disabled="true"]/field:cursor-not-allowed group-data-[disabled="true"]/field:opacity-50',

          props.className,
        ) ?? ''
      }
    />
  );
}
