import { StatusChip } from "@/components/portfolio-status";
import type { ChecklistItem } from "@/lib/ects";

export function PortfolioChecklist({ items }: { items: ChecklistItem[] }) {
  const ready = items.filter((item) => item.status === "ready").length;
  const drafts = items.filter((item) => item.status === "draft").length;
  const files = items.filter((item) => item.status === "file").length;

  return (
    <div className="print-break-avoid rounded-2xl border border-border/80 bg-card/20 p-5 sm:p-6 print:border-0 print:bg-transparent print:p-0">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
            Table of contents
          </p>
          <h2 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
            Graduation portfolio checklist
          </h2>
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted-foreground print:hidden">
            Every ECTS requirement has a section below. Drafts are written; files marked
            “add file” need the final PDF before submission.
          </p>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
          {ready} ready · {drafts} drafts · {files} to attach
        </p>
      </div>

      <ol className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-start justify-between gap-4 border-t border-border/60 py-2.5"
            >
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground/85">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="text-[13px] text-foreground/85 transition-colors group-hover:text-foreground">
                    {item.label}
                  </span>
                  {item.hint ? (
                    <span className="mt-0.5 block text-[10px] text-muted-foreground/85 print:hidden">
                      {item.hint}
                    </span>
                  ) : null}
                </span>
              </span>
              <StatusChip status={item.status} />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
