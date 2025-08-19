import { cn } from "@/lib/utils/tailwind";

export default function Writing({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Projects</h3>
      <ul className="flex flex-col gap-4">
        <li>
          <h4>
            Development of a Full Stack Web Application to Manage Monte Carlo
            Methods
          </h4>
          <p>CERN</p>
        </li>
      </ul>
    </article>
  );
}
