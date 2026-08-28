import { Plus } from 'lucide-react';

import { Button } from '#src/components/button';

export function ButtonSmallIconExample() {
  return (
    <Button
      size="smIcon"
      aria-label="Add"
    >
      <Plus />
    </Button>
  );
}
