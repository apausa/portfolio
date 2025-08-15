"use client";

import { heading } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Header({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h1 className="text-6xl font-bold">Pablo Apausa</h1>
      <h2 className="text-3xl">{heading}</h2>
    </div>
  );
}
