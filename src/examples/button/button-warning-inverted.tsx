import { Button } from '#src/components/button';

export function ButtonWarningInvertedExample() {
  return (
    <div className="rounded bg-black p-4">
      <Button
        variant="warning"
        isInverted={true}
      >
        {'Warning'}
      </Button>
    </div>
  );
}
