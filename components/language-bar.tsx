import type { LanguageSlice } from "@/lib/github-stats";

export function LanguageBar({ slices }: { slices: LanguageSlice[] }) {
  if (slices.length === 0) return null;

  return (
    <div>
      <div className="flex h-2 w-full gap-px overflow-hidden rounded-full bg-muted">
        {slices.map((slice) => (
          <span
            key={slice.name}
            className="h-full"
            style={{
              width: `${slice.percent}%`,
              backgroundColor: slice.color,
            }}
            title={`${slice.name} — ${slice.percent.toFixed(1)}%`}
          />
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {slices.map((slice) => (
          <li key={slice.name} className="flex items-center gap-1.5 text-[10px]">
            <span
              aria-hidden
              className="size-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-foreground/75">{slice.name}</span>
            <span className="font-mono text-muted-foreground">
              {slice.percent.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
