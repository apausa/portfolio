import { about } from "@/lib/constants";

export default function About() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">About me</h3>
      <p className="text-md">{about}</p>
    </section>
  );
}
