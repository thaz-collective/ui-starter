import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

import { allComponents } from 'content-collections';

export const Route = createFileRoute('/_docs/components')({
  component: RouteComponent,
});

function RouteComponent() {
  const sorted = [...allComponents].toSorted((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="mx-auto flex max-w-6xl gap-8 px-6 py-8">
      <aside className="w-48 shrink-0">
        <nav aria-label="Components">
          <h2 className="mb-3 text-xs font-semibold text-muted-foreground uppercase">{'Components'}</h2>
          <ul className="flex flex-col gap-1">
            {sorted.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/components/$componentID"
                  params={{ componentID: item.slug }}
                  className="block rounded px-2 py-1 text-sm data-[status=active]:bg-muted data-[status=active]:font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
