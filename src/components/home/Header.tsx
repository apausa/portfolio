"use client";

import { heading } from "@/lib/constants/about";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 w-full">
      <h1 className="text-4xl font-bold">Pablo Apausa</h1>
      <h2 className="text-2xl">{heading}</h2>
    </header>
  );
}
