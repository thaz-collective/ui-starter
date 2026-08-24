import { Card } from '#src/common/components/card';

export function CardSecondaryExample() {
  return (
    <Card
      variant="secondary"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Secondary'}</Card.Title>
        <Card.Description>{'One layer deeper than default.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  );
}
