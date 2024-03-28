import { useState } from "react";
import Button from "./ui/Button";

export default function Section({
  title,
  children,
  type = "basic",
  isActive,
  onToggle,
  sectionIndex,
}) {
  return (
    <section className="border p-3 rounded">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="flex items-center gap-3 flex-wrap">{children}</div>
      <div className="flex items-center gap-3 flex-wrap">
        {type === "multiple" && isActive && (
          <Button name="Add" color="btn-warning" />
        )}
        {type !== "color" &&
          (isActive ? (
            <Button
              name="Save"
              color="btn-primary"
              onClick={() => onToggle(sectionIndex)}
            />
          ) : (
            <Button
              name="Edit"
              color="btn-secondary"
              onClick={() => onToggle(sectionIndex)}
            />
          ))}
      </div>
    </section>
  );
}
