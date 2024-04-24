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
      setActive(0);
      toast.success("Saved !", {
        position: "bottom-right",
      });
    } else {
      setActive(sectionIndex);
    }
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  return (
    <main className="p-5 grid md:grid-cols-2 gap-4">
      <section className="space-y-3">
        <h1 className="text-xl font-bold mb-3">Sections</h1>
        <Section title="Theme" type="color">
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
        </Section>
        <Section
          title="Personal Information"
          isActive={active === 1}
          onToggle={handleSectionToggle}
          sectionIndex={1}
        >
          <Input
            label="Name"
            value={personalInfo.general.name}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                general: {
                  ...personalInfo.general,
                  name: e.target.value,
                },
              });
            }}
            isDisabled={active === 0 || active !== 1}
          />
          <Input
            label="Email"
            value={personalInfo.general.email}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                general: {
                  ...personalInfo.general,
                  email: e.target.value,
                },
              });
            }}
            type="email"
            isDisabled={active === 0 || active !== 1}
          />
          <Input
            label="LinkedIn"
            value={personalInfo.general.linkedin}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                general: {
                  ...personalInfo.general,
                  linkedin: e.target.value,
                },
              });
            }}
            type="text"
            isDisabled={active === 0 || active !== 1}
          />
          <Input
            label="Website"
            value={personalInfo.general.website}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                general: {
                  ...personalInfo.general,
                  website: e.target.value,
                },
              });
            }}
            type="text"
            isDisabled={active === 0 || active !== 1}
          />
        </Section>
        <Section
          title="Education"
          isActive={active === 2}
          onToggle={handleSectionToggle}
          sectionIndex={2}
        >
          <Input
            label="Name"
            value={personalInfo.education.name}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                education: {
                  ...personalInfo.education,
                  name: e.target.value,
                },
              });
            }}
            isDisabled={active === 0 || active !== 2}
          />
          <Input
            label="Major"
            value={personalInfo.education.major}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                education: {
                  ...personalInfo.education,
                  major: e.target.value,
                },
              });
            }}
            isDisabled={active === 0 || active !== 2}
          />
          <Input
            label="Start Date"
            type="date"
            value={personalInfo.education.startDate}
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                education: {
                  ...personalInfo.education,
                  startDate: e.target.value,
                },
              });
            }}
            isDisabled={active === 0 || active !== 2}
          />
          {!personalInfo.education.presentStatus && (
            <Input
              label="End Date"
              type="date"
              value={personalInfo.education.endDate}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  education: {
                    ...personalInfo.education,
                    endDate: e.target.value,
                  },
                });
              }}
              isDisabled={active === 0 || active !== 2}
            />
          )}
          {personalInfo.education.presentStatus ? (
            <CheckBox
              name="Present"
              checked={personalInfo.education.presentStatus}
              isDisabled={active === 0 || active !== 2}
              onChange={() => {
                setPersonalInfo({
                  ...personalInfo,
                  education: {
                    ...personalInfo.education,
                    presentStatus: !personalInfo.education.presentStatus,
                  },
                });
              }}
            />
          ) : (
            !personalInfo.education.presentStatus &&
            active === 2 && (
              <CheckBox
                name="Present"
                checked={personalInfo.education.presentStatus}
                isDisabled={active === 0 || active !== 2}
                onChange={() => {
                  setPersonalInfo({
                    ...personalInfo,
                    education: {
                      ...personalInfo.education,
                      presentStatus: !personalInfo.education.presentStatus,
                    },
                  });
                }}
              />
            )
          )}
        </Section>
        <Section
          title="Experience"
          type="multiple"
          isActive={active === 3}
          onToggle={handleSectionToggle}
          sectionIndex={3}
        >
          <Input label="Company" isDisabled={active === 0 || active !== 3} />
          <Input label="Role" isDisabled={active === 0 || active !== 3} />
          <Input
            label="Responsibility"
            isDisabled={active === 0 || active !== 3}
          />
          <Input
            label="Start Date"
            type="date"
            isDisabled={active === 0 || active !== 3}
          />
          <Input
            label="End Date"
            type="date"
            isDisabled={active === 0 || active !== 3}
          />
        </Section>
      </section>
      <section>
        <h1 className="text-xl font-bold mb-3">CV</h1>
        <Cv theme={selectedColor} person={personalInfo} />
      </section>
      <ToastContainer autoClose={2500} />
    </main>
  );
}

export default App;
