import type { ReactNode } from 'react';

import { TanStackDevtools } from '@tanstack/react-devtools';
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import type { TanStackRouterContext } from '#src/configs/tanstack-router';

import globalCss from '#src/global.css?url';

const queryDevtoolsPlugin = {
  name: 'Tanstack Query',
  render: <ReactQueryDevtoolsPanel />,
};

const routerDevtoolsPlugin = {
  name: 'Tanstack Router',
  render: <TanStackRouterDevtoolsPanel />,
};

export const Route = createRootRouteWithContext<TanStackRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <TanStackDevtools
          config={{
            panelLocation: 'bottom',
            position: 'bottom-right',
            theme: 'dark',
          }}
          // eventBusConfig={{
          //   debug: true,
          //   connectToServerBus: true,
          // }}
          plugins={[formDevtoolsPlugin(), routerDevtoolsPlugin, queryDevtoolsPlugin]}
        />
      </body>
    </html>
  );
}
