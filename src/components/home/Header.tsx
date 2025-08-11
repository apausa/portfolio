"use client";

import { heading } from "@/lib/constants";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 justify-between w-full">
        <h1 className="text-6xl font-bold">
          <p>Pablo</p>
          <p>Apausa</p>
        </h1>
        <p className="text-2xl text-right text-muted">Work in progress</p>
      </div>
      <h2 className="text-2xl">{heading}</h2>
    </header>
  );
}
