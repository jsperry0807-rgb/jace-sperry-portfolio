import type { PortfolioStatus } from "@/lib/ects";
import { cn } from "@/lib/utils";

import { StatusChip } from "@/components/portfolio-status";

export function PortfolioSection({
  id,
  index,
  title,
  description,
  status,
  children,
  className,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  status?: PortfolioStatus;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 border-t border-border/70 pt-8", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-brand">
            {index}
          </span>
          <span aria-hidden className="h-px w-6 bg-border" />
          <h2
            id={`${id}-title`}
            className="text-lg font-medium tracking-tight sm:text-xl"
          >
            {title}
          </h2>
        </div>
        {status ? <StatusChip status={status} /> : null}
      </div>

      {description ? (
        <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}

      <div className="mt-6">{children}</div>
    </section>
  );
}
