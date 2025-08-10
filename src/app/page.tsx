"use client";

import P5Sketch from "@/components/home/Background";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import About from "@/components/home/main/About";
import { Separator } from "@/components/ui/separator";

export function Home {
  return (
    <>
      <P5Sketch />
      <Header />
      <main className="flex flex-col gap-4 w-full">
        <Separator />
        <About />
        <Separator />
        <Separator />
      </main>
      <Footer />
    </>
  );
}


