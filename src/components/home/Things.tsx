import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/tailwind";

export default function Things({ className }: { className: string }) {
  return (
    <Card className={cn("bg-0", className)}>
      <CardHeader className="text-lg">
        <CardTitle>Relevant things</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4">
        <ul className="text-base list-disc list-inside">
          <li>
            <a
              className="text-custom-cyan no-underline hover:underline"
              href="https://repository.cern/records/f94q8-vhq71"
              rel="noreferrer"
              target="_blank"
            >
              Building a simulations dashboard for ALICE researchers to manage
              Monte Carlo methods.
            </a>
          </li>
          <li>Graduating with dual degrees in both arts and engineering.</li>
          <li>
            CERN Alumni,{" "}
            <a
              className="text-custom-yellow no-underline hover:underline"
              href="https://app.novatalent.com/open/certificate/DQV0HEHKGL6710HYNPW4Z1ZBL"
              rel="noreferrer"
              target="_blank"
            >
              Nova member
            </a>
            , indie maker circles, TypeScript...
          </li>
          <li>
            Wondering what machines dream about at Technical University of
            Madrid.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
