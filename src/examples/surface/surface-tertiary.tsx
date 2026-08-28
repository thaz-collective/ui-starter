import { Surface } from '#src/components/surface';

export function SurfaceTertiaryExample() {
  return (
    <Surface
      variant="tertiary"
      className="rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Tertiary'}
    </Surface>
  );
}
