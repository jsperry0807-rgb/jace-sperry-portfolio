"use client";

import { useEffect, useState } from "react";

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(new Date());
}

export function LiveClock({ timeZone, label }: { timeZone: string; label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(timeZone));
    tick();
    const interval = window.setInterval(tick, 15_000);
    return () => window.clearInterval(interval);
  }, [timeZone]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-50" />
        <span className="relative inline-flex size-1.5 rounded-full bg-brand/80" />
      </span>
      {label}
      <span className="text-muted-foreground/90 tabular-nums" aria-label="Local time">
        {time ?? "—:—"}
      </span>
    </span>
  );
}
