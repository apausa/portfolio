import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Links({ className }: { className: string }) {
  return (
    <section className={cn("grid grid-cols-6 gap-4", className)}>
      {links.map((link) => (
        <Button
          key={link.name}
          asChild
          className="col-span-6 xs:col-span-3"
          size="lg"
          variant="outline"
        >
          <Link href={link.href} target="_blank">
            <link.icon />
            {link.name}
          </Link>
        </Button>
      ))}
    </section>
  );
}
