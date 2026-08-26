import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxWithIndeterminateStateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isIndeterminate={true}
    >
      <Checkbox.Button>{'Select all'}</Checkbox.Button>
    </Checkbox>
  );
}
