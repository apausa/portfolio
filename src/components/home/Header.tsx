"use client";

import { cn } from "@/lib/utils/tailwind";

export default function Header({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-3xl xs:text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-xl xs:text-2xl">
        Currently in Artificial Intelligence at Technical University of Madrid
        and{" "}
        <a
          className="hover:text-custom-green underline"
          href="https://github.com/apausa"
          rel="noreferrer"
          target="_blank"
        >
          working on side projects
        </a>
        .
      </h2>
    </div>
  );
}
