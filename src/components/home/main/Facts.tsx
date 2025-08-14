import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { list } from "@/lib/constants/about";

export default function Things() {
  return (
    <Card className="flex flex-col gap-2 bg-input/30">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Relevant things I&apos;ve done
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2 ml-4 list-disc">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
