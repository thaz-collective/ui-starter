import { Card } from '#src/common/components/card';

export function CardTertiaryExample() {
  return (
    <Card
      variant="tertiary"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Tertiary'}</Card.Title>
        <Card.Description>{'Two layers deeper than default.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  );
}
