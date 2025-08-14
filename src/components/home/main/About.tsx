import { description } from "@/lib/constants/about";

export default function About() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg font-bold">About me</h3>
      <p>{description}</p>
    </section>
  );
}
