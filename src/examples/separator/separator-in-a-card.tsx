import { Card } from '#src/common/components/card';
import { Separator } from '#src/common/components/separator';

export function SeparatorInACardExample() {
  return (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Header>
        <Card.Title>{'Account'}</Card.Title>
        <Card.Description>{'Manage your account settings.'}</Card.Description>
      </Card.Header>
      <Separator />
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'Edit'}
        </button>
      </Card.Footer>
    </Card>
  );
}
