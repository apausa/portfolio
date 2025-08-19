import { cn } from "@/lib/utils/tailwind";

export default function Projects({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Projects</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4 className="font-semibold">Portfolio website</h4>
          <p>This page</p>
        </li>
        <li>
          <a
            className="text-custom-red dark:text-custom-green no-underline hover:underline font-semibold"
            href="https://www.linkedin.com/in/apausa/"
            rel="noreferrer"
            target="_blank"
          >
            See more in GitHub
          </a>
        </li>
      </ul>
    </article>
  );
}
