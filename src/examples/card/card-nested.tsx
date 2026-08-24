import { Card } from '#src/common/components/card';

export function CardNestedExample() {
  return (
    <Card
      variant="default"
      className="w-80"
    >
      <Card.Header>
        <Card.Title>{'Default'}</Card.Title>
        <Card.Description>{'Outermost card'}</Card.Description>
      </Card.Header>
      <Card.Content>
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>{'Secondary'}</Card.Title>
            <Card.Description>{'Nested one level deep'}</Card.Description>
          </Card.Header>
          <Card.Content>
            <Card variant="tertiary">
              <Card.Header>
                <Card.Title>{'Tertiary'}</Card.Title>
                <Card.Description>{'Nested two levels deep'}</Card.Description>
              </Card.Header>
              <Card.Content>{'Innermost content.'}</Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </Card.Content>
    </Card>
  );
}
