export default function Timeline({ person, theme }) {
  return (
    <ul className="timeline timeline-vertical">
      {person.experience.map((exp, index) => (
        <li key={index}>
          {index !== 0 && <hr />}
          <div className="timeline-start text-sm">
            <p className=" font-bold">{exp.role}</p>
            <p>{exp.company}</p>
            <p>{exp.responsibility}</p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">{`${
            exp.startDate.split("-")[0]
          } - ${exp.endDate.split("-")[0]}`}</div>
          {person.experience.length - 1 !== index && <hr />}
        </li>
      ))}
    </ul>
  );
}
