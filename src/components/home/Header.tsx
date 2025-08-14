"use client";

import { heading } from "@/lib/constants/about";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-6xl font-bold">Pablo Apausa</h1>
      <h2 className="text-3xl">{heading}</h2>
    </div>
  );
}
