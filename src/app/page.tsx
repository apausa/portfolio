"use client";

import About from "@/components/home/About";
import Things from "@/components/home/Facts";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Links from "@/components/home/Links";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="
      w-full

      xs:h-dvh
      xs:justify-center
      xs:max-w-xl
      xs:mx-auto

      flex
      flex-col
      gap-4
      p-4
      "
    >
      <Header />
      <Separator />
      <About />
      <Separator />
      <Links />
      <Separator />
      <Footer />
    </div>
  );
}
