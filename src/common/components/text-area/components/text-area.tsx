import type { TextAreaProps as RACTextAreaProps } from 'react-aria-components';
import { composeRenderProps, TextArea as RACTextArea } from 'react-aria-components';

import { textAreaVariants } from '#src/common/components/text-area/variants';

export type TextAreaProps = RACTextAreaProps;

export function TextArea(props: TextAreaProps) {
  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return textAreaVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
