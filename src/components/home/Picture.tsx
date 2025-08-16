import Image from "next/image";

export default function Picture({ src }: { src: string }) {
  return (
    <>
      <Image
        alt="Image 1"
        height={3024}
        src={src}
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
    </>
  );
}
