import { IconWorld } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Place({ className }: { className: string }) {
  return (
    <div
      className={cn("flex items-center gap-2 text-custom-current", className)}
    >
      <IconWorld className="w-4 h-4" stroke={2} />
      <p>Based in Madrid, Spain</p>
    </div>
  );
}
