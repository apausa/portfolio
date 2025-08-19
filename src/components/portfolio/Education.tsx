import { cn } from "@/lib/utils/tailwind";

export default function Education({ className }: { className: string }) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-bold">Education</h3>
      <ul className="flex flex-col gap-4">
        <li>
          <h4>Technical University of Madrid</h4>
          <p>Master of Science - MS, Artificial Intelligence</p>
          <p>Madrid, Spain</p>
          <p>2025 - 2026</p>
        </li>
        <li>
          <h4>Universitat Oberta de Catalunya</h4>
          <p>Bachelor of Science - BS, Software Development</p>
          <p>Barcelona, Spain</p>
          <p>2022 - 2025</p>
        </li>
        <li>
          <h4>Universitat de Barcelona / Universitat Oberta de Catalunya</h4>
          <p>Bachelor of Arts - BA, Digital Design</p>
          <p>Barcelona, Spain</p>
          <p>2019 - 2024</p>
        </li>
      </ul>
    </article>
  );
}
