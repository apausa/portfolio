import { IconWorld } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Place({ className }: { className: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-custom-green", className)}>
      <IconWorld className="w-4 h-4 flex-shrink-0" stroke={2} />
      <p className="min-w-0 break-words">Based in Madrid, Spain</p>
    </div>
  );
}
