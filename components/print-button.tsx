"use client";

import { Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrintButton({
  label = "Print / Save as PDF",
}: {
  label?: string;
}) {
  return (
    <Button
      onClick={() => window.print()}
      className="h-11 rounded-full px-5 text-sm print:hidden"
    >
      <Printer data-icon="inline-start" />
      {label}
    </Button>
  );
}
