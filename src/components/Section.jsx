import Button from "./ui/Button";

export default function Section({
  title,
  children,
  isActive = false,
  type = "basic",
}) {
  return (
    <section className="border p-3 rounded">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="flex items-center gap-3 flex-wrap">{children}</div>
      <div className="flex items-center gap-3 flex-wrap">
        {type !== "basic" && isActive && (
          <Button name="Add" color="btn-warning" />
        )}
        {isActive ? (
          <Button name="Save" color="btn-primary" />
        ) : (
          <Button name="Edit" color="btn-secondary" />
        )}
      </div>
    </section>
  );
}
