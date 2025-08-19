import { cn } from "@/lib/utils/tailwind";

export default function Projects({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Projects</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4>Portfolio website</h4>
          <p>This page</p>
          <p>Next.js, TypeScript</p>
          <p>2025</p>
        </li>
      </ul>
    </article>
  );
}
