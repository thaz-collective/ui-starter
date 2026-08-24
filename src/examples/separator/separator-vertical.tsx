import { Separator } from '#src/common/components/separator';

export function SeparatorVerticalExample() {
  return (
    <div className="flex h-6 items-center gap-3">
      <span className="text-sm">{'Left'}</span>
      <Separator orientation="vertical" />
      <span className="text-sm">{'Right'}</span>
    </div>
  );
}
