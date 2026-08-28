import { Plus } from 'lucide-react';

import { Button } from '#src/components/button';

export function ButtonLargeIconExample() {
  return (
    <Button
      size="lg"
      isIcon={true}
      aria-label="Add"
    >
      <Plus />
    </Button>
  );
}
