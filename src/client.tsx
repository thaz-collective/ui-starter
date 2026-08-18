import { StrictMode, startTransition } from 'react';

import { StartClient } from '@tanstack/react-start/client';

import { hydrateRoot } from 'react-dom/client';
// oxlint-disable-next-line import/no-unassigned-import -- Needed to polyfill in temporal globally
import 'temporal-polyfill/full/global';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
