import { ArrowUpRight, FileText } from "lucide-react";

export function DocumentSlot({
  title,
  description,
  meta = "Attachment",
  href,
}: {
  title: string;
  description: string;
  meta?: string;
  href?: string;
}) {
  return (
    <div className="print-break-avoid rounded-xl border border-dashed border-border/80 bg-card/20 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/80">
            {meta}
          </p>
          <h3 className="mt-2 text-base font-medium tracking-tight">{title}</h3>
          <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <FileText aria-hidden className="size-4 shrink-0 text-muted-foreground/85" />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
          {href ? "Attached" : "File needed"}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Open document
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : (
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85 print:hidden">
            Add the PDF
          </span>
        )}
      </div>
    </div>
  );
}
