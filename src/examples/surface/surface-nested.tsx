import { Surface } from '#src/components/surface';

export function SurfaceNestedExample() {
  return (
    <Surface
      variant="default"
      className="w-full rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
    >
      {'Default'}
      <Surface
        variant="secondary"
        className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
      >
        {'Secondary'}
        <Surface
          variant="tertiary"
          className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
        >
          {'Tertiary'}
          <Surface
            variant="quaternary"
            className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
          >
            {'Quaternary'}
            <Surface
              variant="quinary"
              className="mt-3 rounded-lg border border-surface-border p-4 hover:bg-surface-hover"
            >
              {'Quinary'}
            </Surface>
          </Surface>
        </Surface>
      </Surface>
    </Surface>
  );
}
