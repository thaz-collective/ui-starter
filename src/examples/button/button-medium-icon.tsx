import { Plus } from 'lucide-react';

import { Button } from '#src/components/button';

export function ButtonMediumIconExample() {
  return (
    <Button
      size="md"
      isIcon={true}
      aria-label="Add"
    >
      <Plus />
    </Button>
  );
}
