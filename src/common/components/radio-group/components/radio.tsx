import type { RadioProps as RACRadioProps } from 'react-aria-components';
import { composeRenderProps, Radio as RACRadio } from 'react-aria-components';

import { radioGroupVariants } from '#src/common/components/radio-group/variants';

export type RadioProps = RACRadioProps;

export function Radio(props: RadioProps) {
  const slots = radioGroupVariants();

  return (
    // oxlint-disable-next-line no-deprecated -- RAC's `Radio` is deprecated in favor of a `RadioField`/`RadioButton` split; this library targets the classic compound-primitive shape used by all its component plans, migrate when that split is adopted here.
    <RACRadio
      {...props}
      data-slot="radio"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.radio({ ...props, ...renderProps, className });
      })}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          <span
            data-slot="radio-circle"
            className={slots.circle()}
          >
            <span
              data-slot="radio-dot"
              className={slots.dot()}
            />
          </span>
          {children}
        </>
      ))}
    </RACRadio>
  );
}
