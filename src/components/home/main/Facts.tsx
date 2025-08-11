import { list } from "@/lib/constants/about";

export default function Facts() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">You might know me for</h3>
      <ul className="text-md list-disc list-inside">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
