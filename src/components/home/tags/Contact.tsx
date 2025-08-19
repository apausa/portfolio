import { IconMailFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Contact({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-custom-selection dark:text-custom-current",
        className,
      )}
    >
      <IconMailFilled className="w-4 h-4 flex-shrink-0" />
      <p className="min-w-0 break-words">pablo[at]apausa[dot]dev</p>
    </div>
  );
}
