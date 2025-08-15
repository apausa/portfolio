import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { list } from "@/lib/constants/about";
import { cn } from "@/lib/utils/tailwind";

export default function Things({ className }: { className: string }) {
  return (
    <Card className={cn("flex flex-col gap-2 bg-0 p-4", className)}>
      <CardHeader className="p-0 m-0">
        <CardTitle className="text-lg font-semibold p-0 m-0">
          Relevant things I&apos;ve done
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ul className="list-disc list-inside">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
