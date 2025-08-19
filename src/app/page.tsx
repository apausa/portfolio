"use client";

import About from "@/components/home/About";
import Carrousel from "@/components/home/carrousel/Carrousel";
import Links from "@/components/home/Links";
import Contact from "@/components/home/tags/Contact";
import Place from "@/components/home/tags/Place";
import Spotify from "@/components/home/tags/Spotify";
import Time from "@/components/home/tags/Time";
import Title from "@/components/home/Title";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Highlights from "@/components/portfolio/Highlights";
import Projects from "@/components/portfolio/Projects";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/toggle";

export default function Home() {
  return (
    <div className="relative flex flex-col xs:flex-row xs:h-dvh overflow-hidden">
      <div className="absolute right-4 top-4 xs:right-16 xs:top-16">
        <ModeToggle />
      </div>
      <main
        className="
        w-full
        xs:w-4xl
        flex
        flex-col
        xs:justify-between
        px-4
        pt-12
        pb-8
        xs:p-16
        gap-4
        "
      >
        <div className="grid grid-cols-6 gap-4">
          <Title className="col-span-6" />
          <Contact className="col-span-6 xs:col-span-2" />
          <Place className="col-span-6 xs:col-span-4 -mt-2 xs:mt-0 " />
          <Separator className="col-span-6" />
          <About className="col-span-6" />
          <Separator className="col-span-6" />
          <Links className="col-span-6" />
          <Highlights className="col-span-6 xs:col-span-6" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <Spotify className="col-span-6" />
          <Time className="col-span-6 -mt-2" />
        </div>
      </main>
      <aside
        className="
        w-full
        xs:flex-1
        flex
        flex-col
        px-4
        pt-8
        pb-16
        xs:p-16
        xs:pl-8
        gap-8
        overflow-y-auto
        bg-input/30
        xs:border-l
      "
      >
        <div className="grid grid-cols-6 gap-4">
          {/* <Education className="col-span-6" />
          <Separator className="col-span-6" />
          <Experience className="col-span-6" />
          <Separator className="col-span-6" />
          <Projects className="col-span-6" /> */}
          <Carrousel
            className="
              col-span-6
              xs:col-span-2
              xs:col-start-5
              xs:h-64
              xs:w-64
              xs:absolute
              xs:bottom-16
              xs:right-16"
          />
        </div>
      </aside>
    </div>
  );
}
