import { Surface } from '#src/components/surface';

export function SurfaceTransparentExample() {
  return (
    <Surface
      variant="transparent"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Transparent'}
    </Surface>
  );
}
