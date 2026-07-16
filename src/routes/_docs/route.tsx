import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

import { useSuspenseQueryDeferred } from '#src/common/suspense-query-deferred';
import { contentOptions } from '#src/services/content/options';

export const Route = createFileRoute('/_docs')({
  loader: ({ context: { queryClient } }) => {
    void queryClient.prefetchQuery(contentOptions.getComponentSlugListQueryOptions());
  },
  component: RouteComponent,
});

const linkClassName = 'block rounded px-2 py-1 text-sm data-[status=active]:bg-muted data-[status=active]:font-medium';

function RouteComponent() {
  const {
    query: { data: allComponents },
  } = useSuspenseQueryDeferred(contentOptions.getComponentSlugListQueryOptions());

  return (
    <div className="mx-auto flex max-w-6xl gap-8 px-6 py-8">
      <aside className="w-48 shrink-0">
        <nav aria-label="Components">
          <h2 className="mb-3 text-xs font-semibold text-muted-foreground uppercase">{'Components'}</h2>
          <ul className="flex flex-col gap-1">
            {allComponents.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/components/$componentID"
                  params={{ componentID: item.slug }}
                  className={linkClassName}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-label="Reference"
          className="mt-6"
        >
          <h2 className="mb-3 text-xs font-semibold text-muted-foreground uppercase">{'Reference'}</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/colors"
                className={linkClassName}
              >
                {'Colors'}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
