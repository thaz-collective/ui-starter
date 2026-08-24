import { Card } from '#src/common/components/card';

export function CardTransparentExample() {
  return (
    <Card
      variant="transparent"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Transparent'}</Card.Title>
        <Card.Description>{'No background or border.'}</Card.Description>
      </Card.Header>
      <Card.Content>{'Card content goes here.'}</Card.Content>
    </Card>
  );
}
