import { Button } from '#src/components/button';

export function ButtonPrimaryInvertedExample() {
  return (
    <div className="rounded bg-black p-4">
      <Button
        variant="primary"
        isInverted={true}
      >
        {'Primary'}
      </Button>
    </div>
  );
}
