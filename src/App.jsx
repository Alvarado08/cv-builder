import { useState } from "react";
import Input from "./components/ui/Input";
import Section from "./components/Section";

function App() {
  const [active, setActive] = useState(0);
  const handleSectionToggle = (sectionIndex) => {
    if (active !== 0) {
      setActive(0);
    } else {
      setActive(sectionIndex);
    }
  };
  return (
    <main className="p-5">
      <h1 className="text-xl font-bold mb-3">Sections</h1>
      <section className="space-y-3">
        <Section
          title="Personal Information"
          isActive={active === 1}
          onToggle={handleSectionToggle}
          sectionIndex={1}
        >
          <Input label="Name" />
          <Input label="Email" type="email" />
        </Section>
        <Section
          title="Education"
          isActive={active === 2}
          onToggle={handleSectionToggle}
          sectionIndex={2}
        >
          <Input label="Name" />
          <Input label="Major" />
          <Input label="Date" type="date" />
        </Section>
        <Section
          title="Experience"
          type="multiple"
          isActive={active === 3}
          onToggle={handleSectionToggle}
          sectionIndex={3}
        >
          <Input label="Company" />
          <Input label="Role" />
          <Input label="Responsibility" />
          <Input label="Date" type="date" />
        </Section>
      </section>
    </main>
  );
}

export default App;
