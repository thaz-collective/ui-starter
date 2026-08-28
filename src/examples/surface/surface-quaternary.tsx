import { Surface } from '#src/components/surface';

export function SurfaceQuaternaryExample() {
  return (
    <Surface
      variant="quaternary"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Quaternary'}
    </Surface>
  );
}
