"use client";

import { heading } from "@/lib/constants";

export default function Header() {
  return (
    <header className="flex flex-col gap-2 w-full text-center">
      <h1 className="text-md xs:text-xl font-bold">Pablo Apausa</h1>
      <h2 className="text-md xs:text-xl">{heading}</h2>
    </header>
  );
}
