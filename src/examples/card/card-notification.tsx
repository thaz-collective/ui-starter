import { Card } from '#src/common/components/card';

export function CardNotificationExample() {
  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Deployment complete'}</Card.Title>
        <Card.Description>{'Production · 2 minutes ago'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-sm opacity-75">
          {'Version 2.4.1 was successfully deployed with no errors. All health checks passed.'}
        </p>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View deployment'}
        </button>
        <button
          type="button"
          className="text-xs font-medium text-muted-foreground hover:underline"
        >
          {'Dismiss'}
        </button>
      </Card.Footer>
    </Card>
  );
}
