import Autoplay from "embla-carousel-autoplay";

import Picture from "@/components/home/carrousel/Picture";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils/tailwind";

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
          <CarouselItem className="relative group aspect-[4/3] xs:h-52 ">
            <Picture src="/about/img1.jpg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}
