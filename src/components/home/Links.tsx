import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Links({ className }: { className: string }) {
  return (
    <div className={cn("flex flex-col h-full gap-4", className)}>
      {links.map((link) => (
        <Button
          key={link.name}
          asChild
          className="flex-1 h-12"
          variant="outline"
        >
          <Link
            href={link.href}
            target={link.name === "pablo@apausa.dev" ? "_self" : "_blank"}
          >
            <link.icon />
            {link.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
