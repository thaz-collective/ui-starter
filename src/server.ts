import type { Register } from '@tanstack/react-router';
import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server';
import type { RequestHandler } from '@tanstack/react-start/server';

// oxlint-disable-next-line import/no-unassigned-import -- Needed to polyfill in temporal globally
import 'temporal-polyfill/full/global';

const fetch = createStartHandler(defaultStreamHandler);

// Providing `RequestHandler` from `@tanstack/react-start/server` is required so that the output types don't import it from `@tanstack/start-server-core`
export interface ServerEntry {
  fetch: RequestHandler<Register>;
}

export function createServerEntry(entry: ServerEntry): ServerEntry {
  return {
    async fetch(...args) {
      return await entry.fetch(...args);
    },
  };
}

// oxlint-disable-next-line import/no-default-export -- Needed for this file
export default createServerEntry({ fetch });
