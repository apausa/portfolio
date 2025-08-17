import { IconMailFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Contact({ className }: { className: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-custom-green", className)}>
      <IconMailFilled className="w-4 h-4" />
      <p>pablo[at]apausa[dot]dev</p>
    </div>
  );
}
