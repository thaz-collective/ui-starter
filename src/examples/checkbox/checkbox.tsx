import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
    </Checkbox>
  );
}
