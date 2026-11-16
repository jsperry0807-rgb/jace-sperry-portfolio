import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function Motif({ project }: { project: Project }) {
  const { accent, motif } = project;

  if (motif === "rings") {
    return (
      <g fill="none" stroke={accent} strokeWidth="1">
        {[44, 80, 116, 152, 188].map((radius, index) => (
          <circle
            key={radius}
            cx="372"
            cy="96"
            r={radius}
            strokeOpacity={0.3 - index * 0.045}
          />
        ))}
        <circle cx="372" cy="96" r="116" strokeOpacity="0.5" strokeDasharray="3 8" />
        <circle cx="372" cy="96" r="3" fill={accent} fillOpacity="0.7" stroke="none" />
        <path d="M24 224H456" strokeOpacity="0.14" strokeDasharray="2 8" />
      </g>
    );
  }

  if (motif === "qr") {
    const pattern = [
      "111001011",
      "101001101",
      "111010010",
      "000101101",
      "101110010",
      "011001101",
      "110110011",
      "001011100",
      "111001010",
    ];

    return (
      <g fill={accent}>
        {pattern.map((row, rowIndex) =>
          row.split("").map((cell, columnIndex) =>
            cell === "1" ? (
              <rect
                key={`${rowIndex}-${columnIndex}`}
                x={288 + columnIndex * 15}
                y={52 + rowIndex * 15}
                width="9"
                height="9"
                fillOpacity={0.12 + ((rowIndex * 7 + columnIndex * 3) % 5) * 0.06}
              />
            ) : null,
          ),
        )}
        <rect
          x="288"
          y="52"
          width="27"
          height="27"
          fill="none"
          stroke={accent}
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <path d="M24 224H456" stroke={accent} strokeOpacity="0.14" strokeDasharray="2 8" />
      </g>
    );
  }

  if (motif === "cube") {
    return (
      <g fill="none" stroke={accent} strokeLinejoin="round" strokeWidth="1">
        {[
          { x: 300, y: 60, o: 0.5 },
          { x: 352, y: 92, o: 0.28 },
          { x: 248, y: 100, o: 0.2 },
        ].map((cube, index) => (
          <g key={index} strokeOpacity={cube.o}>
            <path d={`M${cube.x} ${cube.y}l32 18v40l-32 18l-32-18V${cube.y + 18}z`} />
            <path d={`M${cube.x - 32} ${cube.y + 18}l32 18l32-18`} />
            <path d={`M${cube.x} ${cube.y + 36}v40`} />
          </g>
        ))}
        <path d="M24 224H456" strokeOpacity="0.14" strokeDasharray="2 8" />
      </g>
    );
  }

  if (motif === "plan") {
    return (
      <g fill="none" stroke={accent} strokeLinejoin="round" strokeWidth="1">
        <g strokeOpacity="0.48">
          <path d="M282 54h138v112H282z" />
          <path d="M282 110h54M336 54v82M336 110h84M370 110v56M336 140h34" />
          <path d="M282 110h-12M270 54v112" strokeOpacity="0.25" strokeDasharray="2 6" />
          <path d="M420 82h12M432 54v112" strokeOpacity="0.25" strokeDasharray="2 6" />
        </g>
        <path d="M336 110a16 16 0 0 1 16-16" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M370 140a14 14 0 0 0 14-14" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M270 196h162" strokeOpacity="0.18" strokeDasharray="2 6" />
        <path d="M270 190v12M432 190v12" strokeOpacity="0.18" />
        <circle cx="300" cy="76" r="3" fill={accent} fillOpacity="0.45" stroke="none" />
      </g>
    );
  }

  return (
    <g fill="none" stroke={accent} strokeWidth="1.5" strokeLinejoin="round">
      <path
        d="M20 168h96l18-34 22 84 24-118 20 92 14-24h48l16-30 20 62 18-32h96"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
      <path
        d="M20 168h96l18-34 22 84 24-118 20 92 14-24h48l16-30 20 62 18-32h96"
        strokeOpacity="0.12"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M24 224H456" strokeOpacity="0.14" strokeDasharray="2 8" strokeWidth="1" />
    </g>
  );
}

export function ProjectArt({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-16/10 overflow-hidden border-b border-border/70 bg-[#08080a]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid [background-size:32px_32px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div
        aria-hidden
        className="absolute -top-20 -right-16 size-72 rounded-full opacity-[0.16] blur-[72px] transition-opacity duration-700 group-hover:opacity-[0.24]"
        style={{ backgroundColor: project.accent }}
      />

      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
        <svg
          aria-hidden
          viewBox="0 0 480 280"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <Motif project={project} />
        </svg>
      </div>

      <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/90">
          {project.coverCaption}
        </span>
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/85">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <span
        aria-hidden
        className="absolute top-4 left-5 h-1 w-8 rounded-full opacity-70"
        style={{ backgroundColor: project.accent }}
      />

      {project.org ? (
        <span className="absolute top-3.5 right-4 rounded-full border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/85 backdrop-blur">
          {project.org}
        </span>
      ) : null}
    </div>
  );
}
