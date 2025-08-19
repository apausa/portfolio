import { cn } from "@/lib/utils/tailwind";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Highlights({ className }: { className: string }) {
  return (
    <Card className={cn("flex flex-col gap-2 bg-0", className)}>
      <CardHeader className="font-bold">
        <CardTitle>Some Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-['✦'] list-inside">
          <li>
            <span className="ml-2">
              <a
                className="text-custom-red dark:text-custom-green no-underline hover:underline"
                href="https://repository.cern/records/f94q8-vhq71"
                rel="noreferrer"
                target="_blank"
              >
                Developing a simulations dashboard for ALICE researchers to
                manage Monte Carlo methods.
              </a>
            </span>
          </li>
          <li>
            <span className="ml-2">
              Graduating with dual bachelor&apos;s degrees in both arts and
              engineering.
            </span>
          </li>
          <li>
            <span className="ml-2">
              CERN Alumni,{" "}
              <a
                className="text-custom-red dark:text-custom-green no-underline hover:underline"
                href="https://app.novatalent.com/open/certificate/DQV0HEHKGL6710HYNPW4Z1ZBL"
                rel="noreferrer"
                target="_blank"
              >
                Nova
              </a>
              , creative coding, &apos;build in public&apos; circles...
            </span>
          </li>
          <li>
            <span className="ml-2">
              Wondering what machines dream about in my master&apos;s program.
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
