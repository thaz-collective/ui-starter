import { Button } from '#src/components/button';

export function ButtonSecondaryInvertedExample() {
  return (
    <div className="rounded bg-black p-4">
      <Button
        variant="secondary"
        isInverted={true}
      >
        {'Secondary'}
      </Button>
    </div>
  );
}
