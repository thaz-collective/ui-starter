import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import type { SurfaceVariants } from '#src/components/surface';
import { useSurfaceVariant, surfaceVariants } from '#src/components/surface';

type FieldContainerProps = SetRequired<ComponentPropsWithRef<typeof RACGroup>, 'children'> & SurfaceVariants;

export function FieldContainer(props: FieldContainerProps) {
  const { variant } = props;

  const { nestedVariant } = useSurfaceVariant();

  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            surfaceVariants({ ...props, variant: variant ?? nestedVariant, className }),

            'group/field-container relative flex w-full items-stretch gap-1 rounded-md border border-field-border bg-field text-field-foreground transition-colors duration-150 data-focus-within:border-primary-border data-hovered:border-primary-hover',

            // TODO - Change color or adjust size on focus?
            'group-data-[invalid="true"]/field:border-danger/90 group-data-[invalid="true"]/field:data-focus-within:border-danger group-data-[invalid="true"]/field:data-hovered:border-danger-hover',

            // TODO - Any adjustments to the disabled state?
            'group-data-[disabled="true"]/field:cursor-not-allowed group-data-[disabled="true"]/field:opacity-50',

            className,

            // All states we can target:
            // 'data-hovered',
            // 'data-focus-within',
            // 'data-focus-visible',
            // 'data-disabled',
            // 'data-invalid',
          ) ?? ''
        );
      })}
    />
  );
}
