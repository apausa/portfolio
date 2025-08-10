import { facts } from "@/lib/constants";

export default function Facts() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">You might know me for</h3>
      <ul className="text-md list-disc list-inside">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
