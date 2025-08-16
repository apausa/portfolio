import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { cn } from "@/lib/utils/tailwind";

import Picture from "./Picture";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Carrousel({ className }: { className: string }) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {/* <CarouselItem className="relative group">
            <Picture src="/about/img1.jpg" />
          </CarouselItem> */}
          <CarouselItem className="relative group">
            <Picture src="/about/img2.jpg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
