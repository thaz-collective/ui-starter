import { Card } from '#src/common/components/card';

export function CardDefaultExample() {
  return (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Default'}</Card.Title>
        <Card.Description>{'The default surface + border.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
      <Card.Footer>{'Footer content'}</Card.Footer>
    </Card>
  );
}
