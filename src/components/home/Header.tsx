"use client";

import { cn } from "@/lib/utils/tailwind";

export default function Header({ className }: { className: string }) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <h1 className="text-3xl xs:text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-xl xs:text-2xl">
        Software Engineer and Designer — Artificial Intelligence at Technical
        University of Madrid
      </h2>
    </section>
  );
}
