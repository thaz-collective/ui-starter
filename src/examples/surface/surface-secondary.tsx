import { Surface } from '#src/components/surface';

export function SurfaceSecondaryExample() {
  return (
    <Surface
      variant="secondary"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Secondary'}
    </Surface>
  );
}
