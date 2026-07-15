import type { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';

import { routeTree } from '#src/route-tree.gen';

import { createQueryClient } from './tanstack-query';

export interface TanStackRouterContext {
  queryClient: QueryClient;
}

export function getRouter() {
  const queryClient = createQueryClient();

  const router = createRouter({
    routeTree,
    basepath: '/ui-starter',
    routeMasks: [],
    search: {
      strict: true,
    },
    context: {
      queryClient,
    },
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultPendingMs: 700,
    defaultPendingMinMs: 500,
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
