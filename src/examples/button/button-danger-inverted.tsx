import { Button } from '#src/common/components/button';

export function ButtonDangerInvertedExample() {
  return (
    <div className="rounded bg-black p-4">
      <Button
        variant="danger"
        isInverted={true}
      >
        {'Danger'}
      </Button>
    </div>
  );
}
