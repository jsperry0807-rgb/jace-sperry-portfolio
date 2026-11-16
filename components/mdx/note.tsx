import { Lightbulb } from "lucide-react";

export function Note({
  children,
  title = "Note",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <aside className="not-prose my-8 flex gap-3 rounded-xl border border-brand/20 bg-brand/[0.05] p-4 sm:p-5">
      <Lightbulb className="mt-0.5 size-4 shrink-0 text-brand" />
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand/80">
          {title}
        </p>
        <div className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline [&_p]:mt-2 [&_p:first-child]:mt-0">
          {children}
        </div>
      </div>
    </aside>
  );
}
