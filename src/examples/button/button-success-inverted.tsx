import { Button } from '#src/components/button';

export function ButtonSuccessInvertedExample() {
  return (
    <div className="rounded bg-black p-4">
      <Button
        variant="success"
        isInverted={true}
      >
        {'Success'}
      </Button>
    </div>
  );
}
