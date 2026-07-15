import { composeRenderProps } from 'react-aria-components';

import type { TextAreaProps as InternalTextAreaProps } from '#src/common/components/text-area';
import { TextArea as InternalTextArea } from '#src/common/components/text-area';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function TextArea(props: InternalTextAreaProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField.TextArea must be used within a component that extends a TextFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalTextArea
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.textArea({ ...props, ...renderProps, className });
      })}
    />
  );
}
