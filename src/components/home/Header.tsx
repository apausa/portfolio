"use client";

import { heading } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Header({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-2xl">{heading}</h2>
    </div>
  );
}
