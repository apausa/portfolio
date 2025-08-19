import Image from "next/image";

export default function Picture({ src }: { src: string }) {
  return (
    <>
      <Image
        fill
        alt="Pablo"
        src={src}
        className="
              object-cover
              h-full
              saturate-0
              group-hover:saturate-100
              transition-saturate
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
