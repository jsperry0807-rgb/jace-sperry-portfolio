export default function LoadingPost() {
  return (
    <div className="page-shell py-14 sm:py-20" aria-busy="true" aria-label="Loading note">
      <div className="h-3 w-24 animate-pulse rounded-full bg-white/[0.06]" />

      <div className="mx-auto mt-10 max-w-[41.5rem] border-t border-border/70 pt-8">
        <div className="flex gap-3">
          <span className="h-2.5 w-28 animate-pulse rounded-full bg-white/[0.06]" />
          <span className="h-2.5 w-16 animate-pulse rounded-full bg-white/[0.05]" />
          <span className="h-2.5 w-20 animate-pulse rounded-full bg-white/[0.05]" />
        </div>

        <div className="mt-6 h-11 w-full animate-pulse rounded-lg bg-white/[0.07]" />
        <div className="mt-3 h-11 w-2/3 animate-pulse rounded-lg bg-white/[0.07]" />
        <div className="mt-6 h-3 w-3/4 animate-pulse rounded-full bg-white/[0.05]" />

        <div className="mt-12 space-y-3">
          {[100, 96, 90, 100, 74, 100, 93, 88, 60].map((width, index) => (
            <div
              key={index}
              className="h-2.5 animate-pulse rounded-full bg-white/[0.045]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>

        <div className="mt-10 h-6 w-1/2 animate-pulse rounded-md bg-white/[0.06]" />
        <div className="mt-4 space-y-3">
          {[100, 92, 84].map((width, index) => (
            <div
              key={index}
              className="h-2.5 animate-pulse rounded-full bg-white/[0.045]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
