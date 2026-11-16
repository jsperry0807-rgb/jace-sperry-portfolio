export function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div className="scroll-progress-bar h-full origin-left bg-gradient-to-r from-brand/30 via-brand to-brand/30" />
    </div>
  );
}
