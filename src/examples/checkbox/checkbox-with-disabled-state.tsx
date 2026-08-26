import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxWithDisabledStateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isDisabled={true}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
    </Checkbox>
  );
}
