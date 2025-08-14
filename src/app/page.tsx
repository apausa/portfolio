"use client";

import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import About from "@/components/home/main/About";
import Things from "@/components/home/main/Facts";
import Links from "@/components/home/main/Links";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="
      w-full

      xs:h-dvh
      xs:justify-center
      xs:max-w-lg
      xs:mx-auto

      flex
      flex-col
      gap-4
      p-4
      "
    >
      <Header />
      <main className="flex flex-col gap-4 w-full">
        <Separator />
        <About />
        <Separator />
        <Links />
        <Separator />
        <Things />
        <Separator />
      </main>
      <Footer />
    </div>
  );
}
