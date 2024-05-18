import Input from "./ui/Input";
import CheckBox from "./ui/CheckBox";
import Button from "./ui/Button";
import { Trash } from "./icons/Trash";

export default function Experience({
  experience,
  activeSection,
  handleExperienceChange,
  handleExperiencePresentStatusChange,
  handleExperienceDelete,
}) {
  return (
    <div className="space-y-3 mb-3">
      {experience.map((exp, index) => (
        <div className="flex items-center gap-3">
          <div className="collapse bg-white border-2 border-black">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {`Experience ${index + 1}`}
            </div>
            <div className="collapse-content grid grid-cols-2 gap-3">
              {Object.keys(exp).map((key) => {
                if (key === "endDate" && !exp["presentStatus"]) {
                  return (
                    <Input
                      key={index}
                      label="End Date"
                      type="date"
                      name="endDate"
                      value={exp["endDate"]}
                      onChange={(e) => handleExperienceChange(e, index)}
                      isDisabled={activeSection === 0 || activeSection !== 3}
                    />
                  );
                }
                if (key === "presentStatus") {
                  return (
                    <CheckBox
                      name="Present"
                      key={index}
                      checked={exp["presentStatus"]}
                      onChange={() => {
                        // Toggle the presentStatus for the specific experience item
                        const newPresentStatus = !exp["presentStatus"];
                        handleExperiencePresentStatusChange(
                          index,
                          newPresentStatus
                        );
                      }}
                      isDisabled={activeSection === 0 || activeSection !== 3}
                    />
                  );
                }
                if (key !== "presentStatus" && key !== "endDate") {
                  return (
                    <Input
                      key={index}
                      label={
                        key.includes("Date")
                          ? key.includes("start")
                            ? "Start Date"
                            : "End Date"
                          : key[0].toUpperCase() + key.slice(1)
                      }
                      type={
                        key === "startDate" || key === "endDate"
                          ? "date"
                          : "text"
                      }
                      name={key}
                      value={exp[key]}
                      onChange={(e) => handleExperienceChange(e, index)}
                      isDisabled={activeSection === 0 || activeSection !== 3}
                    />
                  );
                }
              })}
            </div>
          </div>
          <Button onClick={() => handleExperienceDelete(index)}>
            <Trash />
          </Button>
        </div>
      ))}
    </div>
  );
}
