import Link from "./ui/Link";
import Email from "./icons/Email";
import LinkedIn from "./icons/LinkedIn";
import Website from "./icons/Website";
export default function Cv({ person, theme }) {
  return (
    <div>
      <section className={`p-5 ${theme} rounded space-y-3`}>
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
    </div>
  );
}
