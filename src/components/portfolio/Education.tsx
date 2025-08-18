export default function Education() {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="font-bold">Education</h3>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-row justify-between">
          <div>
            <h4>Technical University of Madrid</h4>
            <p>Master of Science - MS, Artificial Intelligence</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Madrid, Spain</p>
            <p>2025 - 2026</p>
          </div>
        </li>
        <li className="flex flex-row justify-between">
          <div>
            <h4>Universitat Oberta de Catalunya</h4>
            <p>Bachelor of Science - BS, Software Development</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Barcelona, Spain</p>
            <p>2022 - 2025</p>
          </div>
        </li>
        <li className="flex flex-row justify-between">
          <div>
            <h4>Universitat de Barcelona / Universitat Oberta de Catalunya</h4>
            <p>Bachelor of Arts - BA, Digital Design</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Barcelona, Spain</p>
            <p>2019 - 2024</p>
          </div>
        </li>
      </ul>
    </article>
  );
}
