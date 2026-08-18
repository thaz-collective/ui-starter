import type { HeaderProps as RACHeaderProps } from 'react-aria-components';
import { Header as RACHeader } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type HeaderProps = RACHeaderProps;

export function Header(props: HeaderProps) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Header must be used within a component that extends a SelectContextProvider');
  }

  const { slots } = context;

  return (
    <RACHeader
      {...props}
      data-slot="header"
      className={slots.header({ className: props.className })}
    />
  );
}
