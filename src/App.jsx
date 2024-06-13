import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Input from "./components/ui/Input";
import ColorPicker from "./components/ui/ColorPicker";
import Section from "./components/Section";
import Cv from "./components/Cv";
import Experience from "./components/Experience";
import CheckBox from "./components/ui/CheckBox";
import Button from "./components/ui/Button";
import Pdf from "./components/Pdf";

import colors from "./utils/colors";
import person from "./utils/person";

function App() {
  const [active, setActive] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(person);
  const [localPersonalInfo, setLocalPersonalInfo] = useState(person);
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");

  let localExperience = localPersonalInfo.experience;
  const uuid = uuidv4();

  const handleSectionToggle = (sectionIndex) => {
    if (active !== 0) {
      setPersonalInfo(localPersonalInfo);
      setActive(0);
      toast.success("Saved!", {
        position: "bottom-right",
      });
    } else {
      setActive(sectionIndex);
    }
  };
  const handleCancelToggle = () => {
    setLocalPersonalInfo(personalInfo);
    setActive(0);
    toast.error("Cancelled!", {
      position: "bottom-right",
    });
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handlePersonalInfoChange = (e) => {
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

  function handleExperiencePresentStatusChange(index, newPresentStatus) {
    // Assuming localPersonalInfo is part of your component's state
    setLocalPersonalInfo((prevInfo) => ({
      ...prevInfo,
      experience: prevInfo.experience.map((exp, i) =>
        i === index ? { ...exp, presentStatus: newPresentStatus } : exp
      ),
    }));
  }

  const handleAddExperience = () => {
    setLocalPersonalInfo({
      ...localPersonalInfo,
      experience: [
        ...localPersonalInfo.experience,
        {
          id: uuid,
          company: "",
          role: "",
          responsibility: "",
          startDate: "",
          endDate: "",
          presentStatus: false,
        },
      ],
    });
    toast.success("Experience created!", {
      position: "bottom-right",
    });
  };

  const handleExperienceDelete = (index) => {
    setLocalPersonalInfo({
      ...localPersonalInfo,
      experience: localPersonalInfo.experience.filter((exp, i) => i !== index),
    });
    toast.info(`Experience ${index + 1} deleted!`, {
      position: "bottom-right",
    });
  };

  return (
    <main className="w-full p-5 grid lg:grid-cols-2 gap-4">
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
              onChange={handlePersonalInfoChange}
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="Email"
              name="email"
              value={localPersonalInfo.general.email}
              onChange={handlePersonalInfoChange}
              type="email"
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="LinkedIn"
              name="linkedin"
              value={localPersonalInfo.general.linkedin}
              onChange={handlePersonalInfoChange}
              type="text"
              isDisabled={active === 0 || active !== 1}
            />
            <Input
              label="Website"
              name="website"
              value={localPersonalInfo.general.website}
              onChange={handlePersonalInfoChange}
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
              onChange={handlePersonalInfoChange}
              isDisabled={active === 0 || active !== 2}
            />
            <Input
              label="Major"
              name="major"
              value={localPersonalInfo.education.major}
              onChange={handlePersonalInfoChange}
              isDisabled={active === 0 || active !== 2}
            />
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              value={localPersonalInfo.education.startDate}
              onChange={handlePersonalInfoChange}
              isDisabled={active === 0 || active !== 2}
            />
            {!localPersonalInfo.education.presentStatus && (
              <Input
                label="End Date"
                name="endDate"
                type="date"
                value={localPersonalInfo.education.endDate}
                onChange={handlePersonalInfoChange}
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
          addExperience={handleAddExperience}
          sectionIndex={3}
        >
          <Experience
            experience={localExperience}
            activeSection={active}
            handleExperienceChange={handleExperienceChange}
            handleExperiencePresentStatusChange={
              handleExperiencePresentStatusChange
            }
            handleExperienceDelete={handleExperienceDelete}
          />
        </Section>
      </section>
      <section>
        <h1 className="text-xl font-bold mb-3">CV</h1>
        <div className="mb-3 h-auto">
          <Cv theme={selectedColor} person={localPersonalInfo} />
        </div>
        <div>
          <PDFDownloadLink
            document={
              <Pdf
                person={localPersonalInfo}
                theme={selectedColor}
                colors={colors}
                experience={localExperience}
              />
            }
            fileName={`${localPersonalInfo.general.name} Resume.pdf`}
          >
            {({ loading }) =>
              loading ? (
                <Button name="Loading..." color="btn-secondary" />
              ) : (
                <Button name="Download" color="btn-neutral" />
              )
            }
          </PDFDownloadLink>
        </div>
      </section>
      <ToastContainer autoClose={2500} />
    </main>
  );
}

export default App;
