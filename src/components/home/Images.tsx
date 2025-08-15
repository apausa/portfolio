import Image from "next/image";

import { cn } from "@/lib/utils/tailwind";

import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Images({ className }: { className: string }) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="relative group">
            <Image
              alt="Image 1"
              height={3024}
              src="/about/IMG_6956.jpg"
              width={3024}
              className="
              w-full
              h-full
              grayscale
              group-hover:grayscale-0
              transition-grayscale
              duration-500
              "
            />
            <div
              className="
              absolute
              inset-0
              bg-custom-selection
              mix-blend-overlay
              opacity-100
              group-hover:opacity-0
              transition-opacity
              duration-500
              "
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
