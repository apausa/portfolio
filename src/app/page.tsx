"use client";

import Link from "next/link";

import About from "@/components/About";
import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import Contact from "@/components/metadata/Contact";
import Place from "@/components/metadata/Place";
import Spotify from "@/components/metadata/Spotify";
import Time from "@/components/metadata/Time";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { links } from "@/lib/constants/about";

export default function Home() {
  return (
    <main
      className="
      w-full
      xs:w-1/2
      h-dvh
      flex
      flex-col
      justify-between
      "
    >
      <div className="grid grid-cols-6 gap-4 m-4 xs:m-12">
        <Header className="col-span-6 xs:col-span-6" />
        <Contact className="col-span-6 xs:col-span-2" />
        <Spotify className="col-span-6 xs:col-span-4 -mt-2 xs:mt-0" />
        <Separator className="col-span-6" />

        <About className="col-span-6" />
        <Separator className="col-span-6" />

        {links.map((link) => (
          <Button
            key={link.name}
            asChild
            className="col-span-6 xs:col-span-3"
            variant="outline"
          >
            <Link href={link.href} target="_blank">
              <link.icon />
              {link.name}
            </Link>
          </Button>
        ))}
        <Highlights className="col-span-6 xs:col-span-6" />
      </div>

      <div className="grid grid-cols-6 gap-4 m-4 xs:m-12">
        <Place className="col-span-6" />
        <Time className="col-span-6 -mt-2" />
      </div>
    </main>
  );
}
