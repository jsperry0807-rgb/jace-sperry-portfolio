"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card/40 px-4 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        className,
      )}
      aria-live="polite"
    >
      <span className="relative flex size-3.5 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.14 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {copied ? (
              <Check className="size-3.5 text-brand" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{copied ? "Copied" : "Copy address"}</span>
    </motion.button>
  );
}
