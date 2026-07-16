import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/components')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
