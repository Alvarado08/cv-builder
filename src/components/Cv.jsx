import Link from "./ui/Link";
import Timeline from "./ui/Timeline";
import Email from "./icons/Email";
import LinkedIn from "./icons/LinkedIn";
import Website from "./icons/Website";
export default function Cv({ person, theme }) {
  return (
    <div className="h-full md:h-[50rem]">
      <section className={`p-8 ${theme} rounded space-y-3`}>
        <h1
          className={`text-3xl font-bold ${
            theme === "bg-blue-500" || theme === "bg-purple-500"
              ? "text-white"
              : null
          }`}
        >
          {person.general.name}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            name={person.general.email}
            theme={theme === "bg-blue-500" || theme === "bg-purple-500"}
          >
            {person.general.email}
            <Email />
          </Link>
          <Link
            name={person.general.linkedin}
            theme={theme === "bg-blue-500" || theme === "bg-purple-500"}
          >
            LinkedIn
            <LinkedIn />
          </Link>
          <Link
            name={person.general.website}
            theme={theme === "bg-blue-500" || theme === "bg-purple-500"}
          >
            Website
            <Website />
          </Link>
        </div>
      </section>
      <section className="h-full p-8 border-solid rounded-b border border-r-2 border-l-2 border-b-2 grid grid-cols-3 gap-3">
        <section className="col-span-2">
          <h1 className="text-xl font-bold">Experience</h1>
          <div className="flex justify-center items-center">
            <Timeline person={person} />
          </div>
        </section>
        <section>
          <h1 className="text-xl font-bold">Education</h1>
          <article>
            <h3>{person.education.major}</h3>
            <h4>{person.education.school}</h4>
            <div className="flex items-center gap-1">
              <span>{`${person.education.startDate.split("-")[0]}-${
                person.education.startDate.split("-")[1]
              }`}</span>
              <span>-</span>
              <span>
                {person.education.presentStatus
                  ? "Present"
                  : `${person.education.endDate.split("-")[0]}-${
                      person.education.endDate.split("-")[1]
                    }`}
              </span>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
