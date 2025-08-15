import { Separator } from "@/components/ui/separator";
import { description } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function About({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Separator />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">About me</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Separator className="mt-auto" />
    </div>
  );
}
