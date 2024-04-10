import { useState } from "react";
import Input from "./components/ui/Input";
import ColorPicker from "./components/ui/ColorPicker";
import Section from "./components/Section";
import Cv from "./components/Cv";
import colors from "./utils/colors";

function App() {
  const [active, setActive] = useState(0);
  const [selectedColor, setSelectedColor] = useState("bg-blue-500");
  const handleSectionToggle = (sectionIndex) => {
    if (active !== 0) {
      setActive(0);
    } else {
      setActive(sectionIndex);
    }
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  return (
    <main className="p-5">
      <div className="grid md:grid-cols-2 gap-4">
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
            <Input label="Name" isDisabled={active === 0 || active !== 1} />
            <Input
              label="Email"
              type="email"
              isDisabled={active === 0 || active !== 1}
            />
          </Section>
          <Section
            title="Education"
            isActive={active === 2}
            onToggle={handleSectionToggle}
            sectionIndex={2}
          >
            <Input label="Name" isDisabled={active === 0 || active !== 2} />
            <Input label="Major" isDisabled={active === 0 || active !== 2} />
            <Input
              label="Date"
              type="date"
              isDisabled={active === 0 || active !== 2}
            />
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
              label="Date"
              type="date"
              isDisabled={active === 0 || active !== 3}
            />
          </Section>
        </section>
        <div>
          <h1 className="text-xl font-bold mb-3">CV</h1>
          <Cv theme={selectedColor} />
        </div>
      </div>
    </main>
  );
}

export default App;
