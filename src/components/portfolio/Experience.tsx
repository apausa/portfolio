import { cn } from "@/lib/utils/tailwind";

export default function Experience({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Recent experience</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4>European Organization for Nuclear Research (CERN)</h4>
          <p>Software Engineering Intern</p>
          <p>Geneva, Switzerland</p>
          <p>2023</p>
        </li>
        <li className="flex flex-col">
          <h4>Platinium Group</h4>
          <p>Web Developer</p>
          <p>Barcelona, Spain</p>
          <p>2021 - 2022</p>
        </li>
      </ul>
    </article>
  );
}
