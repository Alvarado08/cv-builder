import { TimelineXp } from "../icons/TimelineXp";

export default function Timeline({ person }) {
  const sortedExperience = person.experience
    .slice()
    .sort((a, b) => +b.endDate.split("-")[0] - +a.endDate.split("-")[0]);
  return (
    <ul className="timeline timeline-vertical">
      {sortedExperience.map((exp, index) => (
        <li key={index}>
          {index !== 0 && <hr />}
          <div className="timeline-start text-sm">
            <p className="font-bold">{exp.role}</p>
            <p>{exp.company}</p>
            <p>{exp.responsibility}</p>
          </div>
          <div className="timeline-middle">
            <TimelineXp />
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
