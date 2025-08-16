"use client";

import About from "@/components/home/About";
import Carrousel from "@/components/home/Carrousel";
import Header from "@/components/home/Header";
import Highlights from "@/components/home/Highlights";
import Links from "@/components/home/Links";
import Location from "@/components/home/Location";
import Spotify from "@/components/home/Spotify";

export default function Home() {
  return (
    <div
      className="
      w-full
      my-2
      xs:my-0

      xs:max-w-3xl
      xs:mx-auto
      xs:h-screen
      xs:justify-center

      flex
      flex-col
      "
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        <Header className="col-span-3" />
        <Location className="col-span-3 xs:col-span-1" />
        <Spotify className="col-span-3 xs:col-span-2 -mt-2 xs:mt-0" />
        <About className="col-span-3" />
        <Links className="col-span-3 xs:col-span-2" />
        <Carrousel className="col-span-3 xs:col-span-1 " />
        <Highlights className="col-span-3 xs:col-span-3" />
      </div>
    </div>
  );
}
