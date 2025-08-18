"use client";

import About from "@/components/home/About";
import Carrousel from "@/components/home/carrousel/Carrousel";
import Links from "@/components/home/Links";
import Contact from "@/components/home/tags/Contact";
import Place from "@/components/home/tags/Place";
import Spotify from "@/components/home/tags/Spotify";
import Time from "@/components/home/tags/Time";
import Title from "@/components/home/Title";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col xs:flex-row xs:h-dvh overflow-hidden">
      <main
        className="
        w-full
        xs:w-4xl
        flex
        flex-col

        xs:justify-between
        p-4
        pt-12
        pb-16
        xs:p-16
        gap-4
        "
      >
        <div className="grid grid-cols-6 gap-4">
          <Title className="col-span-6 xs:col-span-6" />
          <Contact className="col-span-6 xs:col-span-2" />
          <Place className="col-span-6 xs:col-span-4 -mt-2" />
          <Separator className="col-span-6" />
          <About className="col-span-6" />
          <Separator className="col-span-6" />
          <Links className="col-span-6  xs:col-span-4" />
          <Carrousel className="col-span-6 xs:col-span-2" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <Spotify className="col-span-6 " />
          <Time className="col-span-6 -mt-2" />
        </div>
      </main>
      {/* <aside
        className="
        w-full
        xs:flex-1
        flex
        flex-col

        p-4
        xs:p-16
        gap-4
        overflow-y-auto

        bg-custom-selection/30
      "
      >
        <h3 className="text-md xs:text-lg font-bold" />
      </aside> */}
    </div>
  );
}
