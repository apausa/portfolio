"use client";

import P5Sketch from "@/components/home/Background";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import About from "@/components/home/main/About";
import Facts from "@/components/home/main/Facts";
import Links from "@/components/home/main/Links";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="
      flex
      flex-col
      gap-4
      m-4
      xs:max-w-lg
      xs:mx-auto
      xs:h-dvh
      xs:justify-center
      "
    >
      <P5Sketch />
      <Header />
      <main className="flex flex-col gap-4 w-full">
        <Separator />
        <About />
        <Separator />
        <Links />
        <Separator />
      </main>
      <Footer />
    </div>
  );
}
