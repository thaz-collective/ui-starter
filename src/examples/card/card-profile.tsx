import { Card } from '#src/common/components/card';

export function CardProfileExample() {
  return (
    <Card
      variant="default"
      className="w-64"
    >
      <Card.Content>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="text-sm font-bold text-primary">{'JD'}</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{'Jordan Davis'}</p>
            <p className="truncate text-xs text-muted-foreground">{'jordan@company.com'}</p>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          {'View profile'}
        </button>
        <button
          type="button"
          className="text-xs font-medium text-muted-foreground hover:underline"
        >
          {'Remove'}
        </button>
      </Card.Footer>
    </Card>
  );
}
