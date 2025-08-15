import { IconMapPinFilled } from "@tabler/icons-react";

import { cn } from "@/lib/utils/tailwind";

export default function Location({ className }: { className: string }) {
  return (
    <div
      className={cn("flex items-center gap-2 text-custom-current", className)}
    >
      <IconMapPinFilled className="w-4 h-4" />
      <p>
        Based in{" "}
        <a
          className="no-underline hover:underline text-custom-green"
          href="https://maps.app.goo.gl/dUd1mCLUGf1VZNbu5"
          rel="noreferrer"
          target="_blank"
        >
          Madrid, Spain
        </a>
      </p>
    </div>
  );
}
