import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./components/ui/Input";
import ColorPicker from "./components/ui/ColorPicker";
import Section from "./components/Section";
import Cv from "./components/Cv";
import colors from "./utils/colors";
import CheckBox from "./components/ui/CheckBox";
import person from "./utils/person";

function App() {
  const [active, setActive] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(person);
  const [localPersonalInfo, setLocalPersonalInfo] = useState(person);
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");

  const handleSectionToggle = (sectionIndex) => {
    if (active !== 0) {
      setPersonalInfo(localPersonalInfo);
      setActive(0);
      toast.success("Saved !", {
        position: "bottom-right",
      });
    } else {
      setActive(sectionIndex);
    }
  };
  const handleCancelToggle = () => {
    setLocalPersonalInfo(personalInfo);
    setActive(0);
    toast.error("Cancelled !", {
      position: "bottom-right",
    });
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handlePersonalInfoChange2 = (e) => {
    setLocalPersonalInfo({
      ...localPersonalInfo,
      general: {
        ...localPersonalInfo.general,
        [e.target.name]: e.target.value,
      },
      education: {
        ...localPersonalInfo.education,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleExperienceChange = (e, index) => {
    setLocalPersonalInfo({
      ...localPersonalInfo,
      experience: localPersonalInfo.experience.map((exp, i) =>
        i === index ? { ...exp, [e.target.name]: e.target.value } : exp
      ),
    });
  };

  return (
    <main className="p-5 grid md:grid-cols-2 gap-4">
      <section className="space-y-3">
        <h1 className="text-xl font-bold mb-3">Sections</h1>
        <Section title="Theme" type="color">
          <section className="flex items-center gap-3 flex-wrap">
            {colors.map((color) => (
              <ColorPicker
                key={color.value}
                colorName={color.name}
                colorValue={color.value}
                classValue={color.class}
                isSelected={selectedColor === color.class}
                onColorChange={handleColorChange}
              />
            ))}
          </section>
        </Section>
        <Section
          title="Personal Information"
          isActive={active === 1}
          onToggle={handleSectionToggle}
          onCancel={handleCancelToggle}
          sectionIndex={1}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <Input
              label="Name"
              name="name"
              value={localPersonalInfo.general.name}
              onChange={handlePersonalInfoChange2}
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="Email"
              name="email"
              value={localPersonalInfo.general.email}
              onChange={handlePersonalInfoChange2}
              type="email"
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="LinkedIn"
              name="linkedin"
              value={localPersonalInfo.general.linkedin}
              onChange={handlePersonalInfoChange2}
              type="text"
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="Website"
              name="website"
              value={localPersonalInfo.general.website}
              onChange={handlePersonalInfoChange2}
              type="text"
              isDisabled={active === 0 || active !== 1}
            />
          </div>
        </Section>
        <Section
          title="Education"
          isActive={active === 2}
          onToggle={handleSectionToggle}
          onCancel={handleCancelToggle}
          sectionIndex={2}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <Input
              label="School"
              name="school"
              value={localPersonalInfo.education.school}
              onChange={handlePersonalInfoChange2}
              isDisabled={active === 0 || active !== 2}
            />
            <Input
              label="Major"
              name="major"
              value={localPersonalInfo.education.major}
              onChange={handlePersonalInfoChange2}
              isDisabled={active === 0 || active !== 2}
            />
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              value={localPersonalInfo.education.startDate}
              onChange={handlePersonalInfoChange2}
              isDisabled={active === 0 || active !== 2}
            />
            {!localPersonalInfo.education.presentStatus && (
              <Input
                label="End Date"
                name="endDate"
                type="date"
                value={localPersonalInfo.education.endDate}
                onChange={handlePersonalInfoChange2}
                isDisabled={active === 0 || active !== 2}
              />
            )}
            {localPersonalInfo.education.presentStatus ? (
              <CheckBox
                name="Present"
                checked={localPersonalInfo.education.presentStatus}
                isDisabled={active === 0 || active !== 2}
                onChange={() => {
                  setLocalPersonalInfo({
                    ...localPersonalInfo,
                    education: {
                      ...localPersonalInfo.education,
                      presentStatus: !localPersonalInfo.education.presentStatus,
                    },
                  });
                }}
              />
            ) : (
              !localPersonalInfo.education.presentStatus &&
              active === 2 && (
                <CheckBox
                  name="Present"
                  checked={localPersonalInfo.education.presentStatus}
                  isDisabled={active === 0 || active !== 2}
                  onChange={() => {
                    setLocalPersonalInfo({
                      ...localPersonalInfo,
                      education: {
                        ...localPersonalInfo.education,
                        presentStatus:
                          !localPersonalInfo.education.presentStatus,
                      },
                    });
                  }}
                />
              )
            )}
          </div>
        </Section>
        <Section
          title="Experience"
          type="multiple"
          isActive={active === 3}
          onToggle={handleSectionToggle}
          onCancel={handleCancelToggle}
          sectionIndex={3}
        >
          {localPersonalInfo.experience.map((exp, index) => (
            <div>
              <h2 className="text-xl font-semibold">{`Experience ${
                index + 1
              }`}</h2>

              <div className="flex items-center gap-3 flex-wrap">
                {Object.keys(exp).map((key) => (
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
                      key === "startDate" || key === "endDate" ? "date" : "text"
                    }
                    name={key}
                    value={exp[key]}
                    onChange={(e) => handleExperienceChange(e, index)}
                    isDisabled={active === 0 || active !== 3}
                  />
                ))}
              </div>
            </div>
          ))}
        </Section>
      </section>
      <section>
        <h1 className="text-xl font-bold mb-3">CV</h1>
        <Cv theme={selectedColor} person={localPersonalInfo} />
      </section>
      <ToastContainer autoClose={2500} />
    </main>
  );
}

export default App;
