"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import About from "@/components/home/About";
import Carrousel from "@/components/home/Carrousel";
import Header from "@/components/home/Header";
import Highlights from "@/components/home/Highlights";
import Contact from "@/components/home/metadata/Contact";
import Place from "@/components/home/metadata/Place";
import Spotify from "@/components/home/metadata/Spotify";
import Time from "@/components/home/metadata/Time";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { links } from "@/lib/constants/about";

export default function Home() {
  return (
    <div
      className="
      w-full
      my-4
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
        <Contact className="col-span-3 xs:col-span-1" />
        <Spotify className="col-span-3 xs:col-span-2 -mt-2 xs:mt-0" />
        <Separator className="col-span-3" />

        <About className="col-span-3" />
        <Separator className="col-span-3" />

        {links.map((link) => (
          <Button
            key={link.name}
            asChild
            className="col-span-3 xs:col-span-1"
            variant="outline"
          >
            <Link
              href={link.href}
              target={link.name === "email" ? "_self" : "_blank"}
            >
              <link.icon />
              {link.name}
            </Link>
          </Button>
        ))}
        <Highlights className="col-span-3 xs:col-span-2" />
        <Carrousel className="col-span-3 xs:col-span-1 " />
        <Place className="col-span-3 xs:col-span-1" />
        <Time className="col-span-3 xs:col-span-2 -mt-2 xs:mt-0" />
      </div>
    </div>
  );
}
