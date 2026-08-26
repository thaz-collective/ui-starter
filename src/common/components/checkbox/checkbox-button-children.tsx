import type { CheckboxButtonProps } from 'react-aria-components';
import { Check, Minus } from 'lucide-react';
import { composeRenderProps } from 'react-aria-components';

import { boxVariants } from './checkbox-variants';

export function checkboxButtonChildren(children: CheckboxButtonProps['children']) {
  return composeRenderProps(children, (renderedChildren, renderProps) => {
    return (
      <>
        <span className={boxVariants()}>
          {renderProps.isIndeterminate && <Minus className="size-3.5" />}
          {!renderProps.isIndeterminate && renderProps.isSelected && <Check className="size-3.5" />}
        </span>
        {renderedChildren}
      </>
    );
  });
}
