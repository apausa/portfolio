import Image from "next/image";

import { cn } from "@/lib/utils/tailwind";

export default function Picture({ src }: { src: string }) {
  return (
    <div className="relative group">
      <Image
        alt="Image 1"
        height={256}
        src={src}
        width={256}
        className="
              w-full
              rounded-full
              object-cover
              grayscale
              group-hover:grayscale-0
              transition-grayscale
              duration-500
              "
      />
      <div
        className="
              rounded-full
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
    </div>
  );
}
