"use client";

import P5Sketch from "@/components/home/Background";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { About } from "@/components/home/main/About";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <P5Sketch />
      <Header />
      <Separator className="w-3/4 my-8" />
      <About />
      <Separator className="w-3/4 my-8" />
      <Footer />
    </main>
  );
}
