import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Section from "./components/Section";

function App() {
  return (
    <main className="p-5">
      <h1 className="text-xl font-bold mb-3">Buttons</h1>
      <section className="flex items-center gap-3 mb-3">
        <Button name="Save" color="btn-primary" />
        <Button name="Edit" color="btn-secondary" />
        <Button name="Add" color="btn-warning" />
        <Button name="Remove" color="btn-accent" />
        <Button name="Download" color="btn-neutral" />
      </section>
      <h1 className="text-xl font-bold mb-3">Inputs</h1>
      <section className="flex items-center gap-3">
        <Input label="Name" />
        <Input label="Email" type="email" />
        <Input label="Date" type="date" />
      </section>
      <h1 className="text-xl font-bold mb-3">Sections</h1>
      <section className="space-y-3">
        <Section title="Personal Information">
          <Input label="Name" />
          <Input label="Email" type="email" />
        </Section>
        <Section title="Education">
          <Input label="Name" />
          <Input label="Major" />
          <Input label="Date" type="date" />
        </Section>
        <Section title="Experience" type="multiple">
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
