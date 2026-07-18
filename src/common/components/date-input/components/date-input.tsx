import type { DateInputProps as RACDateInputProps } from 'react-aria-components';
import { composeRenderProps, DateInput as RACDateInput, DateSegment as RACDateSegment } from 'react-aria-components';

import { dateInputVariants } from '#src/common/components/date-input/variants';

export type DateInputProps = Omit<RACDateInputProps, 'children'>;

export function DateInput(props: DateInputProps) {
  const { root, segment } = dateInputVariants();

  return (
    <RACDateInput
      {...props}
      data-slot="date-input"
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
