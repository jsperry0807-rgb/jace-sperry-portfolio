import { CheckCircle2, FileText, PenLine } from "lucide-react";

import type { PortfolioStatus } from "@/lib/ects";
import { cn } from "@/lib/utils";

const statusStyles = {
  ready: {
    label: "Ready",
    icon: CheckCircle2,
    className: "border-brand/25 bg-brand/[0.08] text-brand",
  },
  draft: {
    label: "Draft",
    icon: PenLine,
    className: "border-amber-300/20 bg-amber-300/[0.08] text-amber-200",
  },
  file: {
    label: "Add file",
    icon: FileText,
    className: "border-border/80 bg-muted/30 text-muted-foreground",
  },
} as const;

export function StatusChip({
  status,
  className,
}: {
  status: PortfolioStatus;
  className?: string;
}) {
  const style = statusStyles[status];
  const Icon = style.icon;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] print:hidden",
        style.className,
        className,
      )}
    >
      <Icon aria-hidden className="size-2.5" />
      {style.label}
    </span>
  );
}
