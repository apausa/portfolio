import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div
      className="
      w-full
      xs:w-1/2
      h-dvh
      p-4
      "
    >
      <Card className="bg-input/25 h-full">
        <CardHeader>
          <CardTitle className="text-xl">Portfolio</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
