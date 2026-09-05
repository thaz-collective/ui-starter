import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, DateInput as RACDateInput, DateSegment as RACDateSegment } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type DateInputProps = Omit<ComponentPropsWithRef<typeof RACDateInput>, 'children'> & {
  segmentProps?: Omit<ComponentPropsWithRef<typeof RACDateSegment>, 'segment' | 'children'>;
};

export function DateInput(props: DateInputProps) {
  const { segmentProps, ...rest } = props;

  return (
    <RACDateInput
      {...rest}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/date-input flex min-w-0 flex-1 flex-wrap items-center border-0 bg-transparent px-3 pt-5 pb-1.5 leading-none text-field-foreground outline-none',

            'data-disabled:cursor-not-allowed data-disabled:text-muted-foreground',

            'data-readonly:cursor-default',

            className,

            // data-hovered
            // data-focus-within
            // data-readonly
            // data-disabled
            // data-invalid
          ) ?? ''
        );
      })}
    >
      {(dateSegment) => (
        <RACDateSegment
          {...segmentProps}
          segment={dateSegment}
          className={composeRenderProps(segmentProps?.className, (className) => {
            return (
              cn(
                'rounded-sm px-0.5 tabular-nums transition-opacity duration-150 outline-none',

                'data-placeholder:text-muted-foreground/50',

                'data-[type="literal"]:px-0',

                'data-focused:bg-primary data-focused:text-primary-foreground',

                'data-disabled:cursor-not-allowed',

                // Fade out the placeholder segments and literal separators until the input is
                // focused or already has a value, so an empty field reads as a single hint
                // rather than a full segmented template.
                // 'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[placeholder]:opacity-0',
                // 'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[type="literal"]:opacity-0',

                className,

                // data-hovered
                // data-focused
                // data-focus-visible
                // data-placeholder
                // data-readonly
                // data-disabled
                // data-invalid
                // data-type
              ) ?? ''
            );
          })}
        />
      )}
    </RACDateInput>
  );
}
