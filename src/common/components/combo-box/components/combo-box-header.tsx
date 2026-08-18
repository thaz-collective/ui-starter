import type { HeaderProps as RACHeaderProps } from 'react-aria-components';
import { Header as RACHeader } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type HeaderProps = RACHeaderProps;

export function Header(props: HeaderProps) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.Header must be used within a component that extends a ComboBoxContextProvider');
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
