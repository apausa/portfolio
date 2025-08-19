"use client";

import About from "@/components/home/About";
import Links from "@/components/home/Links";
import Contact from "@/components/home/tags/Contact";
import Place from "@/components/home/tags/Place";
import Spotify from "@/components/home/tags/Spotify";
import Time from "@/components/home/tags/Time";
import Title from "@/components/home/Title";
import Highlights from "@/components/portfolio/Highlights";
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
        pb-8
        xs:p-16
        gap-4
        "
      >
        <div className="grid grid-cols-6 gap-4">
          <Title className="col-span-6" />
          <Contact className="col-span-6 xs:col-span-2" />
          <Spotify className="col-span-6 xs:col-span-4 -mt-2 xs:mt-0 " />
          <Separator className="col-span-6" />
          <About className="col-span-6" />
          <Separator className="col-span-6" />
          <Links className="col-span-6" />
          <Highlights className="col-span-6" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <Place className="col-span-6" />
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
        pt-8
        pb-16
        xs:p-16
        xs:pl-8
        gap-8
        overflow-y-auto
        bg-custom-selection/30
        xs:border-l
      "
      >
        <h3>If you are looking for more information about:</h3>
        <ul className="list-disc list-inside">
          <li>Education, experience and misc. → LinkedIn</li>
          <li>Personal projects → GitHub</li>
          <li>Writing → Substack </li>
        </ul>
      </aside> */}
    </div>
  );
}
