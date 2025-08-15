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
          <CarouselItem>
            <Image
              alt="Image 1"
              className="w-full h-full grayscale hover:grayscale-0"
              height={3024}
              src="/about/IMG_6956.jpg"
              width={3024}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
