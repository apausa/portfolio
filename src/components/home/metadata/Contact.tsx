import { IconMailFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Contact({ className }: { className: string }) {
  return (
    <div
      className={cn("flex items-center gap-2 text-custom-current", className)}
    >
      <IconMailFilled className="w-4 h-4" />
      <p>
        <a
          className="no-underline hover:underline text-custom-green"
          href="mailto:pablo@apausa.dev"
          rel="noreferrer"
          target="_self"
        >
          pablo@apausa.dev
        </a>
      </p>
    </div>
  );
}
