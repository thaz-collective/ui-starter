import { Separator } from '#src/common/components/separator';

export function SeparatorHorizontalExample() {
  return (
    <div className="w-64">
      <p className="text-sm">{'Above the separator'}</p>
      <Separator className="my-3" />
      <p className="text-sm">{'Below the separator'}</p>
    </div>
  );
}
