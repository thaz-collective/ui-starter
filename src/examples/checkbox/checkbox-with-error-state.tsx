import { useState } from 'react';

import { Checkbox } from '#src/common/components/checkbox';

export function CheckboxWithErrorStateExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={setIsSelected}
      isInvalid={true}
    >
      <Checkbox.Button>{'Accept terms and conditions'}</Checkbox.Button>
      <Checkbox.FieldError>{'You must accept the terms to continue.'}</Checkbox.FieldError>
    </Checkbox>
  );
}
