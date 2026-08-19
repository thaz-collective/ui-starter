import type { ResizableTableContainerProps as RACResizableTableContainerProps } from 'react-aria-components';
import { ResizableTableContainer as RACResizableTableContainer } from 'react-aria-components';

export type ResizableContainerProps = RACResizableTableContainerProps;

export function ResizableContainer(props: ResizableContainerProps) {
  return <RACResizableTableContainer {...props} />;
}
