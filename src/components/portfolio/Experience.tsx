export default function Experience() {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="font-bold">Recent experience</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col xs:flex-row xs:justify-between">
          <div>
            <h4>European Organization for Nuclear Research (CERN)</h4>
            <p>Software Engineering Intern</p>
          </div>
          <div className="flex flex-col xs:items-end">
            <p>Geneva, Switzerland</p>
            <p>2023</p>
          </div>
        </li>
        <li className="flex flex-col xs:flex-row xs:justify-between">
          <div>
            <h4>Platinium Group</h4>
            <p>Web Developer</p>
          </div>
          <div className="flex flex-col xs:items-end">
            <p>Barcelona, Spain</p>
            <p>2021 - 2022</p>
          </div>
        </li>
      </ul>
    </article>
  );
}
