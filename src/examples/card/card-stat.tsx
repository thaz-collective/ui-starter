import { Card } from '#src/common/components/card';

export function CardStatExample() {
  return (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Monthly Revenue'}</Card.Title>
        <Card.Description>{'Compared to last 30 days'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-2xl font-bold">{'$12,540'}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{'+8.2% from last month'}</p>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View report →'}
        </button>
      </Card.Footer>
    </Card>
  );
}
