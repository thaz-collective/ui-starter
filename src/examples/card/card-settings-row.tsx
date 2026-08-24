import { Card } from '#src/common/components/card';

export function CardSettingsRowExample() {
  return (
    <Card
      variant="secondary"
      className="w-80"
    >
      <Card.Content>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">{'Two-factor authentication'}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{'Add an extra layer of security'}</p>
          </div>
          <div className="h-5 w-9 shrink-0 rounded-full bg-primary" />
        </div>
      </Card.Content>
    </Card>
  );
}
