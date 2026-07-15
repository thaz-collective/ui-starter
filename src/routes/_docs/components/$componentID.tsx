import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/components/$componentID')({
  component: RouteComponent,
});

function RouteComponent() {
  const { componentID } = Route.useParams();

  console.info('_docs/components/$componentID.tsx');
  console.info('componentID', componentID);

  return <div>{componentID}</div>;
}
