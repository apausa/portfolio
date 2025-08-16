"use client";

import About from "@/components/home/About";
import Carrousel from "@/components/home/Carrousel";
import Header from "@/components/home/Header";
import Links from "@/components/home/Links";
import Location from "@/components/home/Location";
import Spotify from "@/components/home/Spotify";
import Things from "@/components/home/Things";

export default function Home() {
  return (
    <div
      className="
      w-full
      my-2

      xs:w-1/2
      xs:mx-auto
      xs:h-screen
      xs:justify-center

      flex
      flex-col
      "
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        <Header className="order-1 col-span-3" />
        <Location className="order-8 xs:order-2 col-span-3 xs:col-span-1" />
        <Spotify className="order-9 xs:order-3 col-span-3 xs:col-span-2 -mt-2 xs:mt-0" />
        <About className="order-4 col-span-3" />
        <Links className="order-5 col-span-3 xs:col-span-2" />
        <Carrousel className="order-6 col-span-3 xs:col-span-1 " />
        <Things className="order-7 col-span-3 xs:col-span-3" />
      </div>
    </div>
  );
}
