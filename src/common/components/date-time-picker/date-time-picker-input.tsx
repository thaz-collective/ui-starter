import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, DateInput as RACDateInput, DateSegment as RACDateSegment } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const dateInputVariants = tv({
  slots: {
    root: [
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
    segment: [
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
  },
});

export type DateInputProps = Omit<ComponentPropsWithRef<typeof RACDateInput>, 'children'>;

export function Input(props: DateInputProps) {
  const { root, segment } = dateInputVariants();

  return (
    <RACDateInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return root({ ...props, ...renderProps, className });
      })}
    >
      {(dateSegment) => (
        <RACDateSegment
          segment={dateSegment}
          className={segment({})}
        />
      )}
    </RACDateInput>
  );
}
