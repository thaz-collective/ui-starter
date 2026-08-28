import { Surface } from '#src/components/surface';

export function SurfaceQuinaryExample() {
  return (
    <Surface
      variant="quinary"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Quinary'}
    </Surface>
  );
}
