import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/components')({
  component: RouteComponent,
});

function RouteComponent() {
  console.info('_docs/components/route.tsx');

  return <Outlet />;
}
