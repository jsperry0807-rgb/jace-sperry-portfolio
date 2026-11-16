"use client";

import { RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080a",
          color: "#f4f4f5",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: "32rem" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "ui-monospace, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8ed8e6",
            }}
          >
            Error / 500
          </p>
          <h1
            style={{
              margin: "1rem 0 0",
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 500,
            }}
          >
            Something broke on the way here.
          </h1>
          <p
            style={{
              margin: "0.75rem 0 0",
              color: "#a1a1aa",
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            The site failed to render. Reload the page or try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.75rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              height: "2.75rem",
              padding: "0 1.25rem",
              border: 0,
              borderRadius: "9999px",
              background: "#f4f4f5",
              color: "#0a0a0c",
              font: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={15} aria-hidden />
            Try again
          </button>
          {error.digest ? (
            <p
              style={{
                marginTop: "1rem",
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.65rem",
                color: "#71717a",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
