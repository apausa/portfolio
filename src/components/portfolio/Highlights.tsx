import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Highlights() {
  return (
    <Card className="flex flex-col gap-2 bg-0">
      <CardHeader className="font-bold">
        <CardTitle>Some Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-['✦'] list-inside">
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
              CERN Alumni,{" "}
              <a
                className="text-custom-green no-underline hover:underline"
                href="https://app.novatalent.com/open/certificate/DQV0HEHKGL6710HYNPW4Z1ZBL"
                rel="noreferrer"
                target="_blank"
              >
                Nova
              </a>
              , open source, build in public circles...
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
