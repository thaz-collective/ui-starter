import type { SwitchProps as RACSwitchProps } from 'react-aria-components';
import { composeRenderProps, Switch as RACSwitch } from 'react-aria-components';

import { switchVariants } from '#src/common/components/switch/variants';

export type SwitchProps = RACSwitchProps;

export function Switch(props: SwitchProps) {
  const slots = switchVariants();

  return (
    // oxlint-disable-next-line no-deprecated -- RAC's `Switch` is deprecated in favor of a `SwitchField`/`SwitchButton` split; this library targets the classic compound-primitive shape used by all its component plans, migrate when that split is adopted here.
    <RACSwitch
      {...props}
      data-slot="switch"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          <div
            data-slot="switch-track"
            className={slots.track()}
          >
            <div
              data-slot="switch-thumb"
              className={slots.thumb()}
            />
          </div>
          {children}
        </>
      ))}
    </RACSwitch>
  );
}
