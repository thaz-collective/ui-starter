import { Plus } from 'lucide-react';

import { Button } from '#src/components/button';

export function ButtonSmallIconExample() {
  return (
    <Button
      size="sm"
      isIcon={true}
      aria-label="Add"
    >
      <Plus />
    </Button>
  );
}
