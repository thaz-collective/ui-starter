import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, DateInput as RACDateInput, DateSegment as RACDateSegment } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const dateTimeInputVariants = tv({
  base: [
    'group/date-input',
    'flex min-w-0 flex-1 flex-wrap items-center',
    'px-3 pt-5 pb-1.5',
    'leading-none',
    'bg-transparent',
    'text-sm text-foreground',
    'data-[disabled="true"]:cursor-not-allowed',
    'data-[disabled="true"]:text-muted-foreground',
    'data-[readonly="true"]:cursor-default',
  ],
});

const dateTimeSegmentVariants = tv({
  base: [
    'rounded-sm px-0.5 tabular-nums outline-none',
    'data-[placeholder]:text-muted-foreground/50',
    'data-[type="literal"]:px-0',
    'data-focused:bg-primary data-focused:text-primary-foreground',
    'data-disabled:cursor-not-allowed',
    'data-invalid:text-danger',
    'transition-opacity duration-150',
    'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[placeholder]:opacity-0',
    'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[type="literal"]:opacity-0',
  ],
});

interface InputProps
  extends Omit<ComponentPropsWithRef<typeof RACDateInput>, 'children'>, VariantProps<typeof dateTimeInputVariants> {
  segmentProps?: Omit<ComponentPropsWithRef<typeof RACDateSegment>, 'segment' | 'children'> &
    VariantProps<typeof dateTimeSegmentVariants>;
}

export function Input(props: InputProps) {
  const { segmentProps, ...rest } = props;

  return (
    <RACDateInput
      {...rest}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return dateTimeInputVariants({ ...rest, ...renderProps, className });
      })}
    >
      {(dateSegment) => (
        <RACDateSegment
          {...segmentProps}
          segment={dateSegment}
          className={composeRenderProps(segmentProps?.className, (className, renderProps) => {
            return dateTimeInputVariants({ ...segmentProps, ...renderProps, className });
          })}
        />
      )}
    </RACDateInput>
  );
}
