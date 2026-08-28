import { Surface } from '#src/components/surface';

export function SurfaceDefaultExample() {
  return (
    <Surface
      variant="default"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Default'}
    </Surface>
  );
}
