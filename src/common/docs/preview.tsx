import type { ReactNode } from 'react';

export interface PreviewProps {
  code: string;
  children: ReactNode;
}

export function Preview({ code, children }: PreviewProps) {
  return (
    <div className="my-3 flex flex-col overflow-hidden rounded-lg border border-foreground/15">
      <div className="flex flex-wrap items-center gap-3 p-4">{children}</div>
      <pre className="overflow-x-auto border-t border-foreground/15 bg-muted p-4 text-xs">
        <code>{code}</code>
      </pre>
    </div>
  );
}
