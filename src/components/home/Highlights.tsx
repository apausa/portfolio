import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/tailwind";

export default function Highlights({ className }: { className: string }) {
  return (
    <Card className={cn("bg-0", className)}>
      <CardHeader className="text-lg">
        <CardTitle>Some Highlights</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4">
        <ul className="list-['✦'] list-inside">
          <li>
            <span className="ml-2">
              Wondering what machines dream about in my master&apos;s program.
            </span>
          </li>
          <li>
            <span className="ml-2">
              <a
                className="text-custom-green no-underline hover:underline"
                href="https://repository.cern/records/f94q8-vhq71"
                rel="noreferrer"
                target="_blank"
              >
                Building a simulations dashboard for ALICE researchers to manage
                Monte Carlo methods.
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
              <a
                className="text-custom-green no-underline hover:underline"
                href="https://x.com/CERN/status/1790679159372423320"
                rel="noreferrer"
                target="_blank"
              >
                CERN Alumni
              </a>
              ,{" "}
              <a
                className="text-custom-green no-underline hover:underline"
                href="https://app.novatalent.com/open/certificate/DQV0HEHKGL6710HYNPW4Z1ZBL"
                rel="noreferrer"
                target="_blank"
              >
                Nova
              </a>
              , indie maker circles, TypeScript and Python languages...
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
