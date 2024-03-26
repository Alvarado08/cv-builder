import { useState } from "react";
import Button from "./ui/Button";

export default function Section({ title, children, type = "basic" }) {
  const [active, setActive] = useState(false);
  return (
    <section className="border p-3 rounded">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="flex items-center gap-3 flex-wrap">{children}</div>
      <div className="flex items-center gap-3 flex-wrap">
        {type !== "basic" && active && (
          <Button name="Add" color="btn-warning" />
        )}
        {active ? (
          <Button
            name="Save"
            color="btn-primary"
            onClick={() => setActive(false)}
          />
        ) : (
          <Button
            name="Edit"
            color="btn-secondary"
            onClick={() => setActive(true)}
          />
        )}
      </div>
    </section>
  );
}
