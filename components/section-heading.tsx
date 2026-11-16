import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("border-t border-border/70 pt-6", className)}>
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-brand">{index}</span>
        <span aria-hidden className="h-px w-6 bg-border" />
        <span>{eyebrow}</span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <h2
          id={id}
          className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]"
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground lg:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
