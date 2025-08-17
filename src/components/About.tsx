import { description } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function About({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
