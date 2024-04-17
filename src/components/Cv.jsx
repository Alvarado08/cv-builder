import Link from "./ui/Link";
import Email from "./icons/Email";
import LinkedIn from "./icons/LinkedIn";
import Website from "./icons/Website";
export default function Cv({ person, theme }) {
  return (
    <div className="h-full md:h-[50rem]">
      <section className={`p-8 ${theme} rounded space-y-3`}>
        <h1
          className={`text-3xl font-bold ${
            theme === "bg-blue-500" && "text-white"
          }`}
        >
          {person.general.name}
        </h1>
        <div className="flex items-center gap-4">
          <Link name={person.general.email} theme={theme === "bg-blue-500"}>
            {person.general.email}
            <Email />
          </Link>
          <Link name={person.general.linkedin} theme={theme === "bg-blue-500"}>
            LinkedIn
            <LinkedIn />
          </Link>
          <Link name={person.general.website} theme={theme === "bg-blue-500"}>
            Website
            <Website />
          </Link>
        </div>
      </section>
      <section className="h-full p-8 border-solid rounded-b border border-r-2 border-l-2 border-b-2 grid grid-cols-2 gap-4">
        <h1 className="text-xl font-bold">Experience</h1>
        <h1 className="text-xl font-bold">Education</h1>
      </section>
    </div>
  );
}
