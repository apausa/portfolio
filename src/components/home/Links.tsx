import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants/about";

export default function Links() {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Button key={link.name} asChild className="h-12" variant="outline">
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
