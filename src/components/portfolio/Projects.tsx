export default function Projects() {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="font-bold">Projects</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-row justify-between">
          <div>
            <h4>Portfolio website</h4>
            <p>This page</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Next.js, TypeScript</p>
            <p>2025</p>
          </div>
        </li>
      </ul>
    </article>
  );
}
