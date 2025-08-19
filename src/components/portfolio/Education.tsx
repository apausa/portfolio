import { cn } from "@/lib/utils/tailwind";

export default function Education({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Education</h3>
      <ul className="flex flex-col gap-4">
        <li>
          <h4 className="font-semibold">Universidad Politécnica de Madrid</h4>
          <p>Master of Science - MS, Artificial Intelligence</p>
        </li>
        <li>
          <h4 className="font-semibold">Universitat Oberta de Catalunya</h4>
          <p>Bachelor of Science - BS, Software Development</p>
        </li>
        <li>
          <h4 className="font-semibold">
            Universitat Oberta de Catalunya / Universitat de Barcelona
          </h4>
          <p>Bachelor of Arts - BA, Digital Design</p>
        </li>
      </ul>
    </article>
  );
}
