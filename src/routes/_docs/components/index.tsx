import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/components/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>{'Hello "/_docs/components/"!'}</div>;
}
